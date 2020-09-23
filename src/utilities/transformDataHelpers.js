export const updateObjInArray = (items, id, objWithChanges) => {
    return items.map(item => {
        if(item.id === id) {
            return {
                ...item,
                ...objWithChanges
            }
        }
        return { ...item };
    })
}