import React from 'react';
import { ContextProvider } from "../Global/Context"
const Model = () => {
  const { model, closeModel } = React.useContext(ContextProvider);
  const [state, setState] = React.useState({
    register: true,
    login : false
  });
  const [input, setInputes] = React.useState({
    username: '',
    email:'',
    password:''
  })
  const handleInput = e =>{
    setInputes({
      ...input,
      [e.target.name]: e.target.value})
  }
  const formsToggle = ()=>{
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };
  const closeForm = (e) =>{
    const className = e.target.getAttribute("class")
    if(className=== 'model'){
      closeModel();
    }
  };
  // const registerUser = (e) =>{
  //   e.preventDefault();
  //   console.log(input)
  //   register(input)
  // }
  return (
    <>
      {model ?
        <div className='model' onClick={closeForm}>
          <div className='model__container'>
            { state.register ?  <div className='model__form'>
              <form>
                <div className='model__group'>
                  <img src='/image/logo.png' className='navbar-first'></img>
                </div>
                <div className='model__group'>
                  <input 
                  type="text" 
                  name='username' 
                  className='model__input' 
                  placeholder='Username...'
                  onChange={handleInput}
                  value = {input.username}
                  required
                  >
                  </input>
                </div>
                <div className='model__group'>
                  <input 
                  type="email" 
                  name='email' className='model__input'
                   placeholder='Email...'
                   onChange={handleInput}
                  value = {input.email}
                  required
                   >
                   </input>
                </div>
                <div className='model__group'>
                  <input 
                  type="password" 
                  name='password' 
                  className='model__input'
                   placeholder='create password...'
                   onChange={handleInput}
                  value = {input.password}
                  required
                   >
                    </input>
                </div>
                <div className='model__group'>
                  <input type="submit" value='Register' className='btn'></input>
                </div>
                <div className='model__group'>
                  <span onClick = {formsToggle}>Already have an account ?</span>
                </div>
              </form>
            </div>:  <div className='model__form'>
              <form>
                <div className='model__group'>
                  <img src='/image/logo.png' className='navbar-first'></img>
                </div>
                
                <div className='model__group'>
                  <input type="email" name='email' className='model__input' placeholder='Email...'></input>
                </div>
                <div className='model__group'>
                  <input type="password" name='password' className='model__input' placeholder='create password...'></input>
                </div>
                <div className='model__group'>
                  <input type="submit" value='Login' className='btn'></input>
                </div>
                <div className='model__group'>
                  <span onClick = {formsToggle}>Create a new account ?</span>
                </div>
              </form>
            </div>}
           
          </div>
        </div> : ""}
    </>
  )
};

export default Model;
