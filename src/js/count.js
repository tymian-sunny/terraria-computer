// 种子计算随机数
export function countTheFirstRandom(seed){
    return ((1121899819 * seed + 1559595546) % (Math.pow(2, 31) - 1)) / (Math.pow(2, 31) - 1)
}

export function countTheSecondRandom(seed){
    return ((630111683 * seed + 1755192844) % (Math.pow(2, 31) - 1)) / (Math.pow(2, 31) - 1)
}

export function countTheThirdRandom(seed){
    return ((1501065279 * seed + 1649316166) % (Math.pow(2, 31) - 1)) / (Math.pow(2, 31) - 1)
}

export function coundTheNinthRandom(seed){
    return ((265679591 * seed + 2099272109) % (Math.pow(2, 31) - 1)) / (Math.pow(2, 31) - 1)
}

// 随机数反推种子
export function FirstRandomToSeed(firstRandom){
    return (Math.floor(firstRandom * 2147483647) * 1796695496 + 1821612595) % (Math.pow(2, 31) - 1)
}

export function secondRandomToSeed(secondRandom){
    return (Math.floor(secondRandom * 2147483647) * 1891800662 + 1409645351) % (Math.pow(2, 31) - 1)
}

export function thirdRandomToSeed(thirdRandom){
    return (Math.floor(thirdRandom * 2147483647) * 1610885040 + 587487227) % (Math.pow(2, 31) - 1)
}

export function ninthRandomToSeed(ninthRandom){
    return (Math.floor(ninthRandom * 2147483647) * 648963137 + 1348178552) % (Math.pow(2, 31) - 1)
}

// 计算发光苔藓种类
export function mossType(firstRandom){
    if (firstRandom < 0 || firstRandom >= 1){
        ElMessage.warning('第一随机数必须在 [0,1) 之间')
        throw new Error("firstRandom 必须在 [0,1) 之间");
    }
    return Math.floor(firstRandom * 4) + 1
}

// 计算地牢高度
export function dungeonHeight(surfaceStartPoint, caveStartPoint, firstRandom){
    return 
}

// 计算地牢第一个金箱子高度

// 计算地牢颜色
export function dungeonColor(secondRandom){
    return Math.floor(secondRandom * 3) + 1
}

// 计算第一个生成的空岛的位置
export function theFirstAirIsland(){
    return firstRandom
}

// 计算是否生成雏翼
export function isFledglingWings(ninthRandom){
    return ninthRandom < 0.025
}

// 计算海洋风格
export function isFlorida(firstRandom){
    return firstRandom < 0.25

}

// 计算佛罗里达风格位置
export function floridaPosition(firstRandom, secondRandom){
    if(firstRandom >= 0.25){
        ElMessage.warning('第一随机数 必须小于0.25')
        throw new Error("firstRandom 必须小于0.25");
    }
    return secondRandom < 0.5 ? 1 : 2
}
// 计算海洋洞穴
export function seaCave(firstRandom){
    return firstRandom < 1/3
}

// 计算微光位置
export function glimmer(firstRandom, secondRandom){

}

// 计算困难模式邪恶V和神圣V的方向
export function theVWithEvidAndSacred(thirdRandom){
    return Math.floor(thirdRandom * 2) + 1
}

// 计算困难模式V的偏移
export function theOffsetToV(firstRandom, secondRandom){

}

// 计算初始云方向
export function theFirstCloud(thirdRandom){
    return Math.floor(thirdRandom * 2) + 1
}

// 计算初始NPC向导的名字
export function theFirstGuideName(secondRandom){
    return Math.floor(secondRandom * 36) + 1
}

// 计算丛林神龛种类
export function jungleShrine(firstRandom){
    return Math.floor(firstRandom * 5) + 1
}

// 第一个常春藤箱中的物品
export function theFirstIvyBox(firstRandom, secondRandom, thirdRandom){
    if(firstRandom < 0.02){
        return 1
    }else{
        if(secondRandom < 1/15){
            return 2
        }else{
            if(thirdRandom < 0.05){
                return 3
            }
        }
    }
    return 4
}

// 计算各地形的数量

// 计算生命树群数量
export function clusterOfLifeTree(){

}

// 计算倒木的数量
export function fallenWood(worldType, firstRandom){
    switch(worldType){
        case 1: return firstRandom < 1/3 ? 1 : 3
        case 2: return firstRandom < 1/3 ? 2 : 4
        case 3: return firstRandom < 1/3 ? 3 : 5
        default: throw new Error("worldType 必须为1,2或3");
    }
}
