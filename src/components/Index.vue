<template>
    <h1> 泰拉瑞亚种子生成计算器 </h1>

    <el-affix :offset="10">
        <el-input v-model.number="seed" style="width: 240px" placeholder="请输入种子号" @blur="checkSeed" />
        <el-button @click="startCount()">开始计算</el-button>

        <div class="mb-2 ml-4">
        <el-radio-group v-model="worldType" style="background-color: rgba(179, 237, 242, 0.9);padding: 0 2% 0 2%;border-radius: 15px;">
        <el-radio :value="1" size="large">小世界</el-radio>
        <el-radio :value="2" size="large">中世界</el-radio>
        <el-radio :value="3" size="large">大世界</el-radio>
        </el-radio-group>
    </div>
    </el-affix>
    
    <div> 第一随机数: {{ firstRandom }}</div>
    <div> 第二随机数: {{ secondRandom }}</div>
    <div> 第三随机数: {{ thirdRandom }}</div>
    <div> 第九随机数: {{ ninthRandom }}</div>

    <br><br>

    <div>
        发光苔藓: {{ mossTypes[mossType] }}
        <el-image v-if="mossType == 1" src="/moss/Argon_Moss_(placed).webp"></el-image>
        <el-image v-if="mossType == 2" src="/moss/Xenon_Moss_(placed).webp"></el-image>
        <el-image v-if="mossType == 3" src="/moss/Krypton_Moss_(placed).webp"></el-image>
        <el-image v-if="mossType == 4" src="/moss/Neon_Moss_(placed).webp"></el-image>
    </div><br>

    <div>地牢位置: | 施工中...</div><br>
    <div>
        地牢第一个金箱位置:
    </div>
    
    <div id="box" style="position: relative; display: inline-block;">
        <!-- 背景图 -->
        <img id="bg" src="/dungeonBox/background.png" alt="" 
            style="width: 400px; display: block;">

        <!-- 叠加图 -->
        <img id="chest" src="/dungeonBox/Locked_Gold_Chest.webp" alt=""
            style="position: absolute; left: 50%; transform: translateX(50%);top: 200px;border: 3px solid deeppink;">
    </div>
    <br>

    <div>
        地牢颜色:{{ dungeonColors[dungeonColor] }}
        <el-image v-if="dungeonColor == 1" src="/dungeonColor/Blue_Brick_Wall_(placed).webp"></el-image>
        <el-image v-if="dungeonColor == 2" src="/dungeonColor/Green_Brick_Wall_(placed).webp"></el-image>
        <el-image v-if="dungeonColor == 3" src="/dungeonColor/Pink_Brick_Wall_(placed).webp"></el-image>
    </div><br>

    <div>
        第一个空岛生成位置: {{ firstRandom }}
    </div>
    
    <div style="position: relative; display: inline-block;">
        <!-- 背景：展示用 -->
        <img id="skyBgShow" src="/skyIsland/background.png" alt="" style="width: 800px; display: block;">

        <!-- 背景2：计算用（隐藏不显示） -->
        <img id="skyBgCalc" src="/skyIsland/background2.png" style="display: none;">

        <!-- 小岛：可移动 -->
        <img id="island" src="/skyIsland/skyIsland.png" alt=""
            style="position: absolute; top: 20px; transform: translate(-50%, -50%); width: 7%;border: 3px solid greenyellow;">
    </div>

    <br>

    <div>
        是否生成雏翼: {{ fledglingWings }}
    </div><br>

    <div>
        <p>是否生成佛罗里达海洋: {{ isFlorida }}</p>
        <el-image v-if="isFlorida" src="/sea/200px-Florida_style_ocean_map_view.webp"></el-image>
        <div v-if="isFlorida">佛罗里达海洋位置: {{ floridaPositions[floridaPosition] }}</div>
    </div><br>

    <div>
        微光位置
    </div>
    <div>
        <div style="position: relative; display: inline-block;padding-right: 30px;">
            <h3>左侧微光</h3>
        </div>
        <div style="position: relative; display: inline-block;">
            <h3>右侧微光</h3>
        </div>
    </div>
    <div>
        <div style="position: relative; display: inline-block;padding-right: 30px;">
            <!-- 展示图 -->
            <img id="glimmerBgShow" src="/glimmer/background.png" alt="" style="width: 200px; display: block;">

            <!-- 计算图（隐藏，用来取 naturalWidth/Height） -->
            <img id="glimmerBgCalc" src="/glimmer/background2.png" style="display: none;">

            <!-- 小图 -->
            <img id="glimmer1" src="/glimmer/glimmer.webp" alt=""
                style="position: absolute; transform: translate(-50%, -50%); width: 30%;border: 3px solid red;top: 210px;">
        </div>
        <div style="position: relative; display: inline-block;">
            <!-- 展示图 -->
            <img src="/glimmer/background.png" alt="" style="width: 200px; display: block;">

            <!-- 计算图（隐藏，用来取 naturalWidth/Height） -->
            <img src="/glimmer/background2.png" style="display: none;">

            <!-- 小图 -->
            <img id="glimmer2" src="/glimmer/glimmer.webp" alt=""
                style="position: absolute; transform: translate(-50%, -50%); width: 30%;border: 3px solid red;top: 210px;">
        </div>
    </div>
    
    <br>

    <div>
        困难模式邪恶V和神圣V的方向: {{ theVWithEvidAndSacredsPosition[theVWithEvidAndSacred] }}
    </div><br>

    <div>
        困难模式V的偏移 | 施工中...
    </div><br>

    <div>
        初始云的方向: {{ cloudPosition[theFirstCloud] }}
    </div><br>

    <div>
        初始NPC向导的名字: {{ guideName[theFirstGuideName] }}
    </div><br>

    <div>
        丛林神龛的种类: {{ jungleShrineTypes[jungleShrine] }}
        <span v-if="jungleShrine == 1">
            <el-image src="/jungleShrine/Iridescent_Brick.webp"></el-image>
            <el-image src="/jungleShrine/Iridescent_Brick_(placed).webp"></el-image>
        </span>
        <span v-if="jungleShrine == 2">
            <el-image src="/jungleShrine/Mudstone_Brick.webp"></el-image>
            <el-image src="/jungleShrine/Mudstone_Brick_(placed).webp"></el-image>
        </span>
        <span v-if="jungleShrine == 3">
            <el-image src="/jungleShrine/Rich_Mahogany.webp"></el-image>
            <el-image src="/jungleShrine/Rich_Mahogany_(placed).webp"></el-image>
        </span>
        <span v-if="jungleShrine == 4">
            <el-image src="/jungleShrine/Tin_Brick.webp"></el-image>
            <el-image src="/jungleShrine/Tin_Brick_(placed).webp"></el-image>
        </span>
        <span v-if="jungleShrine == 5">
            <el-image src="/jungleShrine/Gold_Brick.webp"></el-image>
            <el-image src="/jungleShrine/Gold_Brick_(placed).webp"></el-image>
        </span>
    </div><br>

    <div>
        第一个常春藤箱中的物品: {{ itemInTheFirstIvyBox[theFirstIvyBox] }}
    </div><br>

    <div>
        各地形数量: | 施工中...
    </div><br>

    <div>
        倒木数量: {{ fallenWood }}
    </div><br><br>

    <h2>特别鸣谢 / Special Thanks</h2>
    <p>此项目所有算法均由B站UP主"粉史莱姆"发现并公布</p>
    <p>视频链接: 
        <el-link type="primary" href="https://www.bilibili.com/video/BV14zYkzaEUD">泄露天机！藏在泰拉瑞亚种子里的秘密：随机数</el-link>
    </p>
    

</template>

<script setup>
    import { ref, warn, watch } from 'vue'
    import { ElMessage } from 'element-plus'
    import * as utils from '../js/count.js'

    const seed = ref('')
    const MIN = 1
    const MAX = 2 ** 31 - 1
    const worldType = ref()

    const firstRandom = ref(0)
    const secondRandom = ref(0)
    const thirdRandom = ref(0)
    const ninthRandom = ref(0)

    const mossType = ref()
    const mossTypes = {
        1: "氩苔藓",
        2: "氙苔藓",
        3: "氪苔藓",
        4: "氖苔藓"
    }

    const dungeonColor = ref()
    const dungeonColors= {
        1: "蓝色",
        2: "绿色",
        3: "粉色"
    }

    const fledglingWings = ref()

    const isFlorida = ref()
    const floridaPosition = ref()
    const floridaPositions = {
        1: "世界左侧",
        2: "世界右侧"
    }
    const seaCave = ref()

    const theVWithEvidAndSacred = ref()
    const theVWithEvidAndSacredsPosition = {
        1: "邪恶在左, 神圣在右",
        2: "神圣在左, 邪恶在右"
    }

    const theFirstCloud = ref()
    const cloudPosition = {
        1: "向左",
        2: "向右"
    }

    const theFirstGuideName = ref()
    const guideName = {
        1: "Joe",
        2: "Connor",
        3: "Tanner",
        4: "Wyatt",
        5: "Cody",
        6: "Levi",
        7: "Luke",
        8: "Jack",
        9: "Scott",
        10: "Logan",
        11: "Cole",
        12: "Asher",
        13: "Bradley",
        14: "Jacob",
        15: "Garrett",
        16: "Dylan",
        17: "Maxwell",
        18: "Steve",
        19: "Brett",
        20: "Andrew",
        21: "Harley",
        22: "Kyle",
        23: "Jake",
        24: "Ryan",
        25: "Jeffrey",
        26: "Seth",
        27: "Marty",
        28: "Brandon",
        29: "Zach",
        30: "Jeff",
        31: "Daniel",
        32: "Trent",
        33: "Kevin",
        34: "Brian",
        35: "Colin",
        36: "Jan"
    }

    const jungleShrine = ref()
    const jungleShrineTypes = {
        1: "荧光",
        2: "泥石",
        3: "红木",
        4: "锡砖",
        5: "金砖",
    }

    const theFirstIvyBox = ref()
    const itemInTheFirstIvyBox = {
        1: "海草",
        2: "玻璃钢钓竿",
        3: "花鞋",
        4: "猛爪手套"
    }

    const fallenWood = ref()

    function startCount(){
        console.log("start")
        if(seed.value == ""){
            ElMessage.warning('请先输入种子号')
            throw new Error("请先输入种子号")
        }

        firstRandom.value = utils.countTheFirstRandom(seed.value)
        secondRandom.value = utils.countTheSecondRandom(seed.value)
        thirdRandom.value = utils.countTheThirdRandom(seed.value)
        ninthRandom.value = utils.coundTheNinthRandom(seed.value)

        mossType.value = utils.mossType(firstRandom.value)

        setLockedGoldChestPosition(firstRandom.value)

        setIslandPosition(firstRandom.value)

        dungeonColor.value = utils.dungeonColor(secondRandom.value)

        fledglingWings.value = utils.isFledglingWings(ninthRandom.value)
        
        isFlorida.value = utils.isFlorida(firstRandom.value)
        if(isFlorida.value == true){
            floridaPosition.value = utils.floridaPosition(firstRandom.value, secondRandom.value)
        }
        seaCave.value = utils.seaCave(firstRandom.value)

        setGlimmer(secondRandom.value, firstRandom.value)

        theVWithEvidAndSacred.value = utils.theVWithEvidAndSacred(thirdRandom.value)

        theFirstCloud.value = utils.theFirstCloud(thirdRandom.value)

        theFirstGuideName.value = utils.theFirstGuideName(secondRandom.value)

        jungleShrine.value = utils.jungleShrine(firstRandom.value)

        theFirstIvyBox.value = utils.theFirstIvyBox(firstRandom.value, secondRandom.value, thirdRandom.value)

        try{
            fallenWood.value = utils.fallenWood(worldType.value, firstRandom.value)
        }catch(error) {
            if(error.message == "worldType 必须为1,2或3")
            ElMessage.warning("请选择世界类型")
            fallenWood.value = "xxx"
        }
        
        return 1
    }

    function checkSeed() {
        if (seed.value === '' || seed.value === null) return

        const val = Number(seed.value)
        if (isNaN(val)) {
            ElMessage.warning('请输入有效数字')
            seed.value = ''
        } else if (val < MIN) {
            ElMessage.warning(`种子号不能小于 ${MIN}`)
            seed.value = MIN
        } else if (val > MAX) {
            ElMessage.warning(`种子号不能大于 ${MAX}`)
            seed.value = MAX
        } else {
            seed.value = val  // 转为数字
        }
    }

    function setLockedGoldChestPosition(yPos){
        const bg = document.getElementById("bg");
        const chest = document.getElementById("chest");

        const bgHeight = bg.clientHeight;
        const chestHeight = chest.clientHeight;

        const y = yPos * (bgHeight - chestHeight);

        chest.style.top = y + "px";
    }

    function setIslandPosition(xPos){
        const bgShow = document.getElementById("skyBgShow"); // 展示图
        const bgCalc = document.getElementById("skyBgCalc"); // 计算图
        const island = document.getElementById("island");

        // 原始宽度
        const W_show = bgShow.naturalWidth;
        const W_calc = bgCalc.naturalWidth;

        // 左右裁掉的部分
        const cut = (W_show - W_calc) / 2;

        // 小岛在 calc 中的逻辑像素位置
        const x_calc = xPos * W_calc;

        // 映射到 show 的逻辑像素位置
        const x_show = cut + x_calc;

        // 换算为实际显示尺寸
        const scale = bgShow.clientWidth / W_show;
        const displayX = x_show * scale;

        // 设置位置（居中对齐）
        island.style.left = displayX + "px";
    }

    function setGlimmer(xPos, yPos) {
        const bgShow = document.getElementById("glimmerBgShow"); 
        const bgCalc = document.getElementById("glimmerBgCalc"); 
        const glimmer1 = document.getElementById("glimmer1"); 
        const glimmer2 = document.getElementById("glimmer2"); 

        // 原始宽高
        const W_show = bgShow.naturalWidth;
        const H_show = bgShow.naturalHeight;
        const W_calc = bgCalc.naturalWidth;
        const H_calc = bgCalc.naturalHeight;

        // 上下裁剪的部分
        const cut_top = (H_show - H_calc) / 2;

        console.log(cut_top)

        // 在计算图中的像素位置
        const x_calc = xPos * W_calc;
        const y_calc = yPos * H_calc;

        console.log(W_show, H_show)
        console.log(x_calc, y_calc)

        // 映射到展示图逻辑像素
        const x_show = x_calc;
        const y_show = cut_top + y_calc;

        console.log(x_show, y_show)

        // 显示比例
        const scaleX = bgShow.clientWidth / W_show;
        const scaleY = bgShow.clientHeight / H_show;

        console.log(scaleX, scaleY)

        // 映射到真实显示坐标
        const displayX = x_show * scaleX;
        const displayY = y_show * scaleY;

        console.log(displayX, displayY)

        // 设置位置（居中对齐）
        glimmer1.style.left = displayX + "px";
        glimmer1.style.top = displayY + "px";
        glimmer2.style.left = displayX + "px";
        glimmer2.style.top = displayY + "px";
    }


</script>


<style scoped>
    .read-the-docs {
        color: #888;
    }

    body {
        background-color: #e43434;
    }
</style>
