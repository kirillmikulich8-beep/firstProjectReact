

function OnChangeComp() {

    function handleChange(event){
        console.log(event.target.value)
    }

    return (
        <div>
            <h2>Событие onChange</h2>
            <input type="text"
             placeholder="Введите текст"
             onChange={handleChange}
             />
        </div>
    )
}
export default OnChangeComp