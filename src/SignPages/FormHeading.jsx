import Styles from './SignIn.module.css'
const FormHeading = ({heading}) =>{
    return(
      <div className='w-100 d-flex justify-content-center'>
       <h1 className={Styles.heading }>{heading}</h1>
       
          
      </div>
    )
  }
  export default FormHeading