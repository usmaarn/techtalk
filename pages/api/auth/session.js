
export default async function handler(req, res){
    const user = {
        id: 1,
        name: 'Usman Muhammad',
        email: 'baba@test.com',
        role: 'admin',
        status: 'active'
    }

    const token = 'avvsdsvbsbvsbsbsdv';

    res.send({token, data: null});
}