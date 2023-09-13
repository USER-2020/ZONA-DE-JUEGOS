import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion, UncontrolledCarousel } from 'reactstrap';
import Drug1 from '../assets/Dream_Background (1).jpg';
import Drug2 from '../assets/Dream_Background (3).jpg';
import Drug3 from '../assets/dream_TradingCard (2).jpg';

export const HomeComponent = () => {

    return (
        <div style={{ marginTop: '56px' }}>
            <div style={{ width: '100vw' }}>
                <UncontrolledCarousel
                    items={[
                        {
                            // altText: 'Slide 1',
                            // caption: 'Slide 1',
                            key: 1,
                            src: Drug1
                        },
                        {
                            // altText: 'Slide 2',
                            // caption: 'Slide 2',
                            key: 2,
                            src: Drug2
                        },
                        {
                            // altText: 'Slide 3',
                            // caption: 'Slide 3',
                            key: 3,
                            src: Drug3
                        }
                    ]} />
                {/* <UncontrolledCarousel
                items={[
                    {
                        altText: 'Slide 1',
                        caption: 'Slide 1',
                        key: 1,
                        src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                        altText: 'Slide 2',
                        caption: 'Slide 2',
                        key: 2,
                        src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                        altText: 'Slide 3',
                        caption: 'Slide 3',
                        key: 3,
                        src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}
            /> */}
            </div>
            {/* Cards */}
            <div className="container px-4 py-5" id="custom-cards" style={{ marginTop: '25px' }}>
                <h2 className="pb-2 border-bottom">Eventos cerca a ti</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('unsplash-photo-1.jpg')` }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('unsplash-photo-2.jpg')` }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                        <small>Pakistan</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>4d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('unsplash-photo-3.jpg')` }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                        <small>California</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>5d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cards */}

            {/* PlayList */}
            <div className="container px-4 py-5" id="custom-cards" style={{ marginTop: '25px' }}>
                <h2 className="pb-2 border-bottom">PlayList</h2>
                <div>
                    <div>
                        <UncontrolledAccordion defaultOpen="1">
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    Accordion Item 1
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>
                                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                    <code>
                                        .accordion-body
                                    </code>
                                    , though the transition does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">
                                    Accordion Item 2
                                </AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <strong>
                                        This is the second item's accordion body.
                                    </strong>
                                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                    <code>
                                        .accordion-body
                                    </code>
                                    , though the transition does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">
                                    Accordion Item 3
                                </AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>
                                    You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                    <code>
                                        .accordion-body
                                    </code>
                                    , though the transition does limit overflow.
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </div>
                </div>
            </div>
            {/* PlayList */}
        </div>
    );
};

