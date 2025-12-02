import Titulo from '../components/Titulo';
import guerreiroImg from '../assets/guerreiro.jpg'; 

function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Titulo texto="Bem-vindo ao Reino RPG" />
            <img 
                src={guerreiroImg} 
                alt="Guerreiro" 
                style={{ width: '300px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} 
            />
            <p style={{ marginTop: '20px' }}>Sistema gerenciador de fichas e aventuras.</p>
        </div>
    );
}
export default Home;