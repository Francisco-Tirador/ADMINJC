import React from 'react'

const ServidoresHeader = ({apis,setUser,User,modulo}) => {
// console.log(apis)

    const INDEX=[]
    const RetornarIndex= apis.map(User=>{INDEX.push(User?.name)})
    
  
    const valueUsuario=(valu)=>{
        let valor=valu.target.value
       let art= INDEX.indexOf(valor)
         setUser(art)
        // console.log(valu)
      }



  return (
    <div className={'ContenHomeHeader '+apis[User].name}>
        <h2>{apis[User].name.toUpperCase()} Modulo id: {modulo}</h2>
      <select name="Amce" id="Acme" onChange={valueUsuario}>
        <option value="" >Servidor</option>
     {
      INDEX.map(Option=>(
        <option key={Option} value={Option}>{Option}</option>
      ))
     }
      </select>
    </div>
  )
}

export default ServidoresHeader
