import React, {useState} from 'react'
import emailjs from 'emailjs-com'

emailjs.init('XFReRobTXMJlOGRsj')

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSent, setIsSent] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault()

        const formData = {
            from_name: e.target.name.value,
            reply_to: e.target.email.value,
            message: e.target.message.value
        }

        emailjs.send('service_kd28zb8', 'template_ulk9d2e', formData, 'XFReRobTXMJlOGRsj')
        .then(() => {
            setIsSent(true)
        })
        .catch((error) => {
            console.log('Failed to send email:', error)
            console.log(formData)
            alert('Failed to send email. Please try again later.')
        })
    }

    return (
        <div>
            <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '30px', marginBottom: '10px', marginTop: '10px'}}>
                <h1 style = {{ fontSize: '28px' }}><b>CONTACT</b></h1>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px'}}>
                <div style = {{position: 'absolute', width: 'calc(100% - 30px)', height: '2px', backgroundColor: 'black'}}></div>
            </div>
            
            <div style = {{padding: '20px', width: 'calc(100% - 30px', margin: '0 auto'}}>
                {!isSent ? (
                    <form onSubmit = {sendEmail} style = {{display: 'flex', flexDirection: 'column'}}>
                    {Object.entries(formData).map(([key, value]) => (
                        <div key = {key} style = {{marginBottom: '20px', position: 'relative'}}>
                            {key !== 'message' ? (
                                <input type = {key === 'email' ? 'email' : 'text'}
                                name = {key}
                                value = {value}
                                onChange = {handleChange}
                                required
                                style = {{
                                    paddingTop: '26px',
                                    padding: ' 10px 10px 10px 10px',
                                    width: '100%', 
                                    border: '2px solid black', 
                                    fontSize: '16px', 
                                    boxSizing: 'border-box'
                                }} 
                                />
                            ) : (
                                <textarea 
                                    name = 'message' 
                                    value = {formData.message} 
                                    onChange = {handleChange} 
                                    required
                                    style = {{
                                        width: '100%',
                                        paddingTop: '26px', 
                                        padding: '10px', 
                                        border: '2px solid black', 
                                        height: '150px', 
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            )}
                            {key !== 'message' ? (
                                <label htmlFor = {key} style = {{
                                    position: 'absolute', 
                                    left: '10px',
                                    top: value ? '20px' : '50%', 
                                    transform: 'translateY(-50%)',
                                    transition: 'all 0.3s ease',
                                    fontSize: value ? '12px' : '16px', 
                                    padding: '0 4px'
                                }}>
                                    <b>{key.toUpperCase()}</b>
                                </label>
                            ) : (
                                <label htmlFor = {key} style = {{
                                    position: 'absolute', 
                                    left: '10px',
                                    top: value ? '20px' : '30px', 
                                    transform: 'translateY(-50%)',
                                    transition: 'all 0.3s ease',
                                    fontSize: value ? '12px' : '16px', 
                                    padding: '0 4px'
                                }}>
                                    <b>{key.toUpperCase()}</b>
                                </label>
                            )}
                        </div>
                        ))}
                        <button type = "submit" style = {{padding: '10px 20px', margin: '10px 0', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}>SEND MESSAGE  🡲</button>
                    </form>
                ) : (
                    <div>
                        <p><b>YOUR MESSAGE HAS BEEN SENT!</b></p>
                        <p>WE'LL GET BACK TO YOU SOON.</p>
                        <button onClick = {() => setIsSent(false)}>SEND ANOTHER MESSAGE</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact