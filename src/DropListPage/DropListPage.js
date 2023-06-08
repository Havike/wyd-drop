import { useState } from 'react';
import mock from './_mock.json'
import "./style.css"
import InputSearch from '../InputSearch/InputSearch';

const DropListPage = () => {
    const [npcDropData, setNpcDropData] = useState(mock)

    const handleChange = (event) => {
        if (event.target) {
            const filter = mock.filter(i => {
                const listItens = i.droplist;
                if (i.name.toUpperCase().includes(event.target.value.toUpperCase())) {
                    return true
                } else if (listItens.find(itemDrop => (itemDrop.name.toUpperCase()).includes(event.target.value.toUpperCase()))) {
                    return true
                } else {
                    return false
                }
            }

            )
            setNpcDropData(filter)
        }

    }

    return (
        <div>
            <div className='containerInput'>
                <InputSearch onChange={handleChange} />
            </div>

            <div className='groupCard'>


                {npcDropData.map(i => {
                    if (i?.droplist?.length === 0) return null
                    return (
                        <div className="card">
                            <div className="container">
                                <div className='containerTitle'>
                                <span className='titleMonster'>{i.name.toUpperCase()}</span>
                                    </div>
                                
                                <div className="containerImg">{i.droplist.map(item =>
                                    <div className='tooltip'>
                                        <span className='tooltiptext'>{item.name}</span>
                                        <img width={40} src={`https://wydmisc.raidhut.com.br/icons/global/${item.id}.gif`} alt="Avatar" />
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DropListPage