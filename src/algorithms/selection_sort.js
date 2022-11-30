function sortBySelection(list) {
    for (let i = 0; i < list.length-1; i++){
        let min = list[i];
        let minIndex=i;
        for (let j = i + 1; j < list.length; j++){
            if (list[j] < min){
                min = list[j];
                minIndex = j;
            }
        }


        list[minIndex] = list[i];
        list[i] = min;
        
    }
    




    return list;
}
