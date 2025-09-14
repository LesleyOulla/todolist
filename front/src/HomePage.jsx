import { Button } from "@/components/ui/button";

const HomePage = () => {

    return (
            <div className="home">
        <h1 className="text-center text-2xl font-bold">Bienvenue sur votre application de gestion de tâches !</h1>
        <p className="text-center mt-4">Organisez vos tâches efficacement avec notre interface intuitive.</p>
        <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg">Commencer</Button>
        </div>
            </div>


    )
    
}
export default HomePage;