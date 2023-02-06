import Primeirocomponent from './Props'
import Aleatorio from './Aleatorio'
import React from 'react'
import Card from '../layout/Card'
import Child from './child'
import Familia from './Familia'

export default _ => 
<>
<h1>Fundamentos React</h1>
<div className='Cards'>
<Card title='Random Number'>
    <Aleatorio min={0} max= {100}/>
    </Card>
    <Card title='Cor Diferente' backgroundColor='#494242'>
    </Card>
    <Card title='Família' backgroundColor='#494242'>
        <Child sobrenome='Bianchi'>
            <Familia name='Bruno' />
            <Familia name='Mariana'/>
            <Familia name='Shirley'/>
            <Familia name='Gilberto' />
        </Child>
    </Card>
</div>


</>

