const maskPartNo = (value, partNo) => {
    value = value.trim()
    let newValue = value
    if (partNo.length === 3 && value.length === 4)
        newValue = value + "-"
    if (partNo.length === 4 && value.length === 5)
        newValue = partNo + "-" + value.slice(4)
    if (value.length > 5 && value.indexOf("-") === -1)
        newValue =  value.slice(0, 4) + "-" + value.slice(4)
    return newValue;
}

export default maskPartNo