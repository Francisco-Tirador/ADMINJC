import React from 'react'

const ServidoresHeader = ({apis,setUser,User,modulo,Asistentes}) => {
// console.log(apis)

    const INDEX=[]
    const RetornarIndex= apis.map(User=>{INDEX.push(User?.name)})
    
  
    const valueUsuario=(valu)=>{
        let valor=valu.target.value
       let art= INDEX.indexOf(valor)
         setUser(art)
        // console.log(valu)
      }

      let jc=[]
  
      Asistentes?Asistentes.map(user=>{if(user.email.includes("@jc")){jc.push(user.email)}}):0

  return (
    <div className={'ContenHomeHeader '+apis[User].name}>
        <h2>{apis[User].name.toUpperCase()} Modulo id: {modulo}</h2>
        <h3> Total de asistentes : {Asistentes?Asistentes.length:0}</h3>
   <h4>Asistentes de jc :{jc.length}</h4>
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
