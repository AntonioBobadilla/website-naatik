const Perfilacion = ({clusters}) => {
    return ( 
        <>

        <p>Informacion de perfilacion</p>

        {
            clusters.map((item) => {
                return (
                    <img src={"http://localhost:5000"+item} width={200} height={200}/>
                )
            })
        }
        </>
     );
}
 
export default Perfilacion;