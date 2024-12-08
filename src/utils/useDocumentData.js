import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from './documentSlice'

const useDocumentData = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchDocsData()
    }, [])

    const fetchDocsData = async () => {
        const response = await fetch(`http://localhost:3000/0`);
        const data = await response.json();
        dispatch(getData(data))
    }
    return {}
}

export default useDocumentData