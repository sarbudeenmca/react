const apiPlaceholderData = async (url = '', optionsObj = null, errorMsg = null) => {
    try {
        const phResponse = await fetch(url, optionsObj)
        if (!phResponse.ok) throw Error('Please reload the page')
        const phItems = await (phResponse).json()
        return phItems
    } catch (error) {
        errorMsg = error.message
        throw error;
    }
}

export default apiPlaceholderData