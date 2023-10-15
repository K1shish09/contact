import React, {useState} from 'react';
import Contactcard from '../../Components/Contactcard/Contactcard';
import  "./Home.css"
function Home(){
    const [contacts, setContacts] = useState([
        {
            name: 'Riya',
            mobile: '3456435676',
            email: 'riya@gmail.com',
        },
        {
            
            name: 'Shreya',
            mobile: '657564389076',
            email: 'snehaa@gmail.com'
        }
    
    
    ]);

    const [ name, setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');

    const addContact=()=>{
    const obj= {
    name:name,
    email:email,
    mobile:mobile,
}

setContacts([...contacts,obj]);
setName('');
setEmail('');
setMobile('');
 };
    return(
<div>
        <h1 className='app-title '>Contact App  📞</h1>
        <div className='app-body'>
            
            <div className='contacts-container'>
                <h2 className='sub-heading'> Show Contact</h2>
                {
                    contacts.map(( contact, index)=>{
                        return (<Contactcard 
                        key={index}
                        name={contact.name} 
                        email={contact.email} 
                        mobile={contact.mobile}
                        />)
                    })
                }
                

            </div>
        <div className='add-contacts-container'>
            <h2  className='sub-heading'> Add Contact</h2>
            <form>
               < input type='text' placeholder='Name' className='user-input'
                onChange={(e)=>{
                setName(e.target.value)
               }}
               value={name}
               />
               < input type='text' placeholder='Email' className='user-input'
               onChange={(e)=>{
                setEmail(e.target.value)

               }}
               />
               < input type='text' placeholder='Mobile' className='user-input'
                  onChange={(e)=>{
                    setMobile(e.target.value)
    
                   }}
              />


<button type='button' className='btn-add-contact'
onClick={addContact}
>
    Add Contact 
    </button>
            </form>
        </div>
        </div>
        </div>
    )
}
export default Home