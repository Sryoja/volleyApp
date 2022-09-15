
// принимает массив объектов и число, разбивает исходный массив на массив  вложенных массивов
// длинна вложенного массива определяется значением teamsInGroup
export const makeRandomTeamList = (teamsList, teamsInGroup) => {
    const max = teamsList.length
    const arr = []

    // -------- функция получения рандомного числа -----------
    function randomInteger(min = 0, max) {
        let rand = min + Math.random() * (max + 1 - min)
        return Math.floor(rand)
    }

    // -------- создаем массив рандомных уникальных чисел от 0 до общего колличества команд -----------
    for (let i = 0; i < max; i++) {
        let p = randomInteger(0, max - 1)
        if (!arr.includes(p)) {
            arr.push(p)
        } else {
            i--
        }
    }

    //------ формируем новый массив команд с рандомныи порядком------------
    const rndTeams = arr.map(t => {
            return teamsList[t]
        }
    )

    //------- делим рандомный массив команд на массивы по колличеству команд в группе ---------------
    function chunkArray(array, chunk) {
        const newArray = [];
        for (let i = 0; i < array.length; i += chunk) {
            newArray.push(array.slice(i, i + chunk));
        }
        return newArray;
    }

    return chunkArray(rndTeams, teamsInGroup);
}
//-----------------------------------------------------------------------

export const makeFinalList = (regList) => {
    return regList.filter(item => item.confirmed === true)
}