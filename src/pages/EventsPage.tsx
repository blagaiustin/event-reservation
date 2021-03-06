import React from "react";
import Event from "../model/Event";
import AddLocationForm from "../components/AddLocationForm";
import LocationsList from "../components/LocationsList";
import AppNavbar from "../components/Navbar";


const styles = {
    page: {
    },
    content: {
        paddingTop: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    listContainer: {
        marginLeft: 180,
        height: "90vh",
        overflow: "scroll"
    },
    navbar: {

    }
}

function EventsPage() {
    const events: Event[] = [
        {
            name: "Castel Ballroom",
            description: "Sala de evenimente medie ca dimensiune(100-250 de persoane), situata la periferia Iasi-ului. Pret locatie: 500 RON / noapte. ",
            imageUrl: "https://hotel.lacastel.ro/wp-content/uploads/2017/10/Castel-Ballroom-small.jpg"
        },
        {
            name: "Hotelul Pleiada",
            description: "Sala de evenimente mare(300-450 de persoane), situata in apropierea Buciumului. Pret locatie: 400 RON / noapte. ",
            imageUrl: "https://valov.ro/wp-content/uploads/2021/12/Hotel-Pleiada-Restaurant-Nunta-Iasi-1024x656.webp"
        },
        {
            name: "Liria",
            description: "Sala de evenimente mare(250-380 de persoane), situata in Dobrovat. Pret locatie: 350 RON / noapte. ",
            imageUrl: "http://liria-events.ro/wp-content/uploads/2020/03/youngcreative-fotografie-nunta-iulia-lucian-liria-151-1000x667.jpg"
        },
        {
            name: "Hotel Pleiada",
            description: "Sala de evenimente mica(50-120 de persoane), situata in apropierea Buciumului. Pret locatie: 300 RON / noapte. ",
            imageUrl: "https://www.hotelpleiada.ro/wp-content/uploads/2021/03/evenimente-la-pleiada-boutique-hotel-sala-nunta-botez-majorat-evenimente-speciale-iasi-12.jpg"
        },
        {
            name: "Castel",
            description: "Sala de evenimente mare(300-350 de persoane), situata in Copou, cu vedere catre parc. Pret locatie: 300 RON / noapte. ",
            imageUrl: "http://www.locatii-evenimente.ro/img//restaurants/2015030334820-2381-Sala_nunti_Iasi_La_Castel_06.jpg"
        },
        {
            name: "Hotelul Capitol",
            description: "Sala de evenimente medie(150-300 de persoane), situata la periferia Iasului dupa Cug 2. Pret locatie: 400 RON / noapte. ",
            imageUrl: "https://www.capitol-hotel.ro/images/event-6.jpg"
        },
        {
            name: "Elisium",
            description: "Sala de evenimente medie(30-90 de persoane), situata la ciric. Pret locatie: 370 RON / noapte. ",
            imageUrl: "https://www.eventist.ro/imagini/prestatori-servicii/galerie/mare/galerie_elysium-events-iasi1036-51-47.jpg"
        },
        {
            name: "Galerie Magnum Ballroom",
            description: "Sala de evenimente mare(400-580 de persoane), situata in la Aroneanu, cu vedere spre lac. Pret locatie: 550 RON / noapte. ",
            imageUrl: "https://www.eventist.ro/imagini/prestatori-servicii/galerie/mare/galerie_magnum-ballroom1422-20-22.jpg"
        },
        {
            name: "Hotel Unirea",
            description: "Sala de evenimente mare(300-400 de persoane), situata in centrul orasului Iasi pe Stefan, cu vedere catre bulevard. Pret locatie: 450 RON / noapte. ",
            imageUrl: "https://www.hotelunirea.ro/public/meeting_images/thumbs/version_1362x931x1/23f993450ed3fa9331c2d0f993a8d625.jpg"
        },
    ]

    return (
        <div style={styles.page}>
            <div style={{ position: "fixed", width: "100vw" }}>
                <AppNavbar />
            </div>
            <div style={{}}>
                <div style={styles.content}>
                    <AddLocationForm/>
                    <div style={styles.listContainer} className={"noScrollbar"}>
                        <LocationsList events={events} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsPage;