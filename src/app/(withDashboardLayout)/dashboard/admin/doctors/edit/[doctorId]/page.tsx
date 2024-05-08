"use client"
type TProps={
    params:{
        doctorId:string
    }
}

const DoctorUpdatePage = ({params}:TProps) => {
    console.log(params?.doctorId)
  return (
    <div>DoctorUpdatePage</div>
  )
}

export default DoctorUpdatePage