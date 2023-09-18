import { Button, Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import MDMA from '../assets/Dream_Background (1).jpg';
import info from '../services/infoSutancias.json';
import { useEffect, useState } from 'react';

const InfoSustanciasComponent = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // const [jsonData, setJsonData] = useState(null);

    // useEffect(() => {
    //     // Ruta al archivo CSV en la carpeta raíz
    //     const csvFilePath = '/INFO.csv';

    //     // Función para cargar y procesar el archivo CSV
    //     const loadCSV = async () => {
    //         try {
    //             const response = await fetch(csvFilePath);
    //             const text = await response.text();

    //             // Utiliza papaparse para convertir el CSV en un objeto JSON
    //             Papa.parse(text, {
    //                 header: true, // La primera fila contiene encabezados
    //                 dynamicTyping: true, // Intenta convertir automáticamente los valores a tipos de datos apropiados
    //                 complete: (result) => {
    //                     setJsonData(result.data);
    //                 },
    //             });
    //         } catch (error) {
    //             console.error('Error al cargar el archivo CSV:', error);
    //         }
    //     };
    //     console.log(jsonData);
    //     loadCSV();
    // }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    return (
        <div>
            <div className='container p-4'>
                <div className='row'>
                    {info ? (
                        info.map((item, index) => (
                            <div key={index} className='col-md-4 mb-4' >
                                <Card inverse style={{ cursor: 'pointer', height: '550px', width:'260px' }}>
                                    <CardImg
                                        alt={item.titulo}
                                        src={item.img}
                                        style={{
                                            height: 300,
                                            opacity: 0.8
                                        }}
                                        width="100%"
                                    />
                                    <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                        <CardTitle tag="h5" style={{ color: 'black', marginTop: '10px' }}>{item.titulo}</CardTitle>
                                        <CardText style={{ color: 'black' }}>{item.Descripcion_corta}</CardText>
                                        <CardText style={{display:'flex', flexDirection:'row', gap:'15px'}}>
                                            <Button style={{ height: '50px' }} color='dark' onClick={() => openModal(item)}>
                                                Ver
                                            </Button>
                                            <Button style={{ height: '50px' }} color='dark'>
                                                Más
                                            </Button>
                                        </CardText>
                                        <CardText>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <p>Cargando datos...</p>
                    )}
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={modalOpen} toggle={closeModal} fullscreen>
                <ModalHeader toggle={closeModal}>{selectedProduct?.titulo}</ModalHeader>
                <ModalBody>
                    {selectedProduct && (
                        <div>
                            <p>{selectedProduct.Descripcion}</p>
                            {/* Agregar más detalles aquí */}
                        </div>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color='secondary' onClick={closeModal}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default InfoSustanciasComponent
