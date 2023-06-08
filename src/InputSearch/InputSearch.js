import './style.css'

const InputSearch = ( {onChange}) => {
    return (
        <div className="form__group field">
            <input onChange={onChange} type="input" className="form__field" placeholder="" name="name" id='name' required />
            <label for="name" className="form__label">DropList</label>
        </div>
    )
}

export default InputSearch