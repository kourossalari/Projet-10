import '../css/main.css'

function TransactionItems ({
    t,
    openIndex, 
    setOpenIndex,
    modal,
    setModal,
    handleCategoryChange,
    handleEditClick,
    selectCategory,
    editingId,
    setEditingId,
    note,
    setNote,
    handleNoteChange
}) {
    return(
        <div  className='row green'>
                    
        <p>{t.date}</p>
        <p>{t.desc}</p>
        <p>{t.amount}</p>
        <p>{t.balance}</p>

        <button
            onClick={() => setOpenIndex(openIndex === t.id ? null : t.id)}
            onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
            setOpenIndex(openIndex === t.id ? null : t.id)
            }
            }}
                className="icone-button"
                aria-expanded={openIndex === t.id}
        >
            <i className={`fa-solid fa-chevron-down ${
                openIndex === t.id ? "iconeRotate" : ""
            }`} />
        </button>
        <div className={`detail${openIndex === t.id ? 'open' : ""}`}>

            <div className='divOne'>
                <p>Transaction type</p>
                <p>Category</p>
                <p>Note</p>
            </div>

            <div className='divTwo'>
                <p>Electronic</p>

                <div>
                    <div className='divNote'>
                        <p>{t.category}</p>
                       <button
                            onClick={() => setModal(modal === t.id ? null : t.id)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === "") {
                                setModal(modal === t.id ? null : t.id)
                                }
                            }}
                            className="iconPen"
                        >
                            <i className="fa-solid fa-pencil" />
                        </button>
                    </div>

                    <div className={`modalHidden ${modal === t.id ? "modalOpen" : ""}`}>
                        <select
                            value={t.category}
                            onChange={(e) => handleCategoryChange(e, t.id)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setModal(null)
                                    }
                            }}
                        >
                            {selectCategory.map((cat) => (
                                <option
                                    key={cat.id}
                                    value={cat.category}
                                >
                                    {cat.category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='divNoteEdit'>
                    <div className='divNote'>
                        <p>{t.note}</p>
                        <button
                            onClick={() => handleEditClick(t.id, t.note)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleEditClick(t.id, t.note)
                                }
                            }}
                            className="iconPen2"
                        >
                            <i className="fa-solid fa-pencil" />
                        </button>
                    </div>

                    <div className={`modalHidden ${editingId === t.id ? "modalOpen" : ""}`}>
                        <input
                            type="text"
                            value={note}
                            autoFocus
                            onChange={(e) => setNote(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleNoteChange(note)
                                }
                                if (e.key === "Escape") {
                                    setEditingId(null)
                                    setNote("")
                                }
                            }}
                        />
                        <button type='submit' className='buttonSubmit' 
                                onClick={() => handleNoteChange(note) }>save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default TransactionItems