import React, { useEffect, useState } from 'react'
import TransactionItems from '../component/TransactionItems'

const EditNote = () => {

    const [transactions, setTransactions] = useState([])
    const [modal, setModal] = useState(null)
    const [note, setNote] = useState("")
    const [openIndex, setOpenIndex] = useState(null) 
    const [editingId, setEditingId] = useState(null)

    const selectCategory = [
        { id: 0, category: "Food" },
        { id: 1, category: "Transport" },
        { id: 2, category: "Shopping" },
    ]

    useEffect(() => {
        setTransactions([
            { id: 0, date: "27/02/20", desc: "Golden Sun Bakery", amount: "$8.00", balance: "$298.00", category: "Food", note: ""  },
            { id: 1, date: "27/02/20", desc: "Golden Sun Bakery", amount: "$8.00", balance: "$298.00", category: "Transport", note: ""  },
            { id: 2, date: "27/02/20", desc: "Golden Sun Bakery", amount: "$8.00", balance: "$298.00", category: "Shopping", note: ""  },
            { id: 3, date: "27/02/20", desc: "Golden Sun Bakery", amount: "$8.00", balance: "$298.00", category: "Shopping", note: "" },
        ])
    }, [])

    const handleCategoryChange = async (e, id) => {
        const value = e.target.value

        setTransactions(prev =>
            prev.map(item =>
                item.id === id ? { ...item, category: value } : item
            )
        )
    }

    const handleNoteChange = (value) => {
        setTransactions(prev => prev.map(item =>
            item.id === editingId ? { ...item, note: value } : item
        ))
        setNote("")
        setEditingId(null)
    }

    const handleEditClick = (id, note) => {
        setEditingId(id)
        setNote(note)
    }

    const handleKeyDown = (e, id, note) => {
        if (e.key === "Enter" || e.key === " ") {
            handleEditClick(id, note)
        }
    }

    return (
        <div>
            {transactions.map((t) => (
                    <TransactionItems 
                    key={t.id}
                    t={t}
                    id={t.id}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                    modal={modal}
                    setModal={setModal}
                    handleCategoryChange={handleCategoryChange}
                    handleEditClick={handleEditClick}
                    selectCategory={selectCategory}
                    editingId={editingId}
                    setEditingId={setEditingId}
                    note={note}
                    setNote={setNote}
                    handleNoteChange={handleNoteChange}
                    />
            ))}
        </div>
    )
}

export default EditNote