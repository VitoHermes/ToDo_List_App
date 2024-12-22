function Modal({ newText, setNewText, handleSaveEdit, cancleEdit }) {
    return (
        <div className="modal">
            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="编辑任务"
            />
            <button onClick={handleSaveEdit}>保存</button>
            <button id="cancle-btn" onClick={cancleEdit}>取消</button>
        </div>
    )
}

export default Modal;