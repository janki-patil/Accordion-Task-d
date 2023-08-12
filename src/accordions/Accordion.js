import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent() {
    const [accordionData, setAccordionData] = useState([]);
    const [header, setHeader] = useState('');
    const [details, setDetails] = useState('');

    const handleHeaderChange = (e) => {
        setHeader(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    };

    const handleAddAccordionItem = (e) => {
        e.preventDefault()
        if (header && details) {
            const newItem = {
                header: header,
                details: details,
            };
            setAccordionData([...accordionData, newItem]);
            setHeader('');
            setDetails('');
        }
    };

    return (
        <>
            <div className='row'>
                <form className='col-6 shadow p-5 bg-white rounded' >
                    <h1 className='row'>Add Section</h1>
                    <div className='row mb-2'>
                        <div className='form-group' >
                            <div ><label htmlFor='header'>Section Header</label></div>
                            <div ><input className='form-control' type='text' name='header' value={header} onChange={handleHeaderChange} /></div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='form-group' >
                            <label htmlFor='details'>Section Details</label>
                            <textarea className='form-control' type='text' name='details' value={details} onChange={handleDetailsChange} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <button className='btn btn-primary border-dark' onClick={handleAddAccordionItem}>Add</button>
                    </div>

                </form>

                <div className='col-6'>
                    {accordionData.map((item, i) => {
                        return <Accordion key={i}>
                            <Accordion.Item >
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>
                                    {item.details}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default AccordionComponent