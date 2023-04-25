import react from 'react';

function AddTrans ({onAddChange,onFormSubmit}) {
    return (
        <form onChange={onAddChange} onSubmit={onFormSubmit}>
            <span>
                <label htmlFor='date'>Date:</label><input type='text' id='date' name='date'/>
                <input type='text' id='description' name='description' placeholder='Description'/>
                <input type='text' id='category' name='category' placeholder='Category'/>
                <input type='text' id='amount' name='amount' placeholder='Amount'/>

            </span>
            <button>Add Trans</button>

        </form>
    );
}