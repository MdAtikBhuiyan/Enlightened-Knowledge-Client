
import { useLocation } from 'react-router-dom';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

const ReadBook = () => {

    const { state } = useLocation()
    // console.log(state);

    const styles = StyleSheet.create({
        page: {
            backgroundColor: "#fff",
            color: "#3c3b3b",
            fontSize: 14,
            width: '300px',
            height: '300px'
        },
        text: {
            fontSize: 30,
            textAlign: 'center',
            marginTop: 10,
            color: '#000'

        },
        image: {
            width: '200',
            height: '220px',
            objectFit: 'contain',
            padding: 10,
        },
        centerImage: {
            alignItems: 'center',
            // flexGrow: 1,
        },
        section: {
            margin: 10,
            padding: 10,
        },
        text2: {
            fontSize: 14,
            textAlign: 'center',
            color: '#000'
        },
        viewer: {
            width: '90vw', //the pdf viewer will take up all of the width and height
            height: '90vh',
        },
    });

    const handlePdfView = (e) => {
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none');
        e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        document.getElementById('pdf-view').style.display='block'
    }


    return (
        <section className="w-[90%] mx-auto mt-16">

            <div className="m-4 mx-auto lg:max-w-screen-lg rounded-md border bg-white border-gray-100 text-gray-600 shadow-md">
                <div className="relative flex h-full flex-col justify-center items-center md:flex-row">
                    <div className="relative p-8 md:w-4/6">
                        <div className="flex flex-col md:flex-row">
                            <h2 className="mb-2 text-4xl font-title font-black text-title-primary">{state?.name}</h2>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end">
                            <p className="mt-2 text-xl font-black text-title-primary">Author: {state?.author}</p>
                        </div>
                        <p className="mt-6 mb-4 font-sans text-base tracking-normal text-title-primary">{state?.description}</p>



                        <div className="mt-8 gap-4 flex flex-col sm:flex-row">
                            <button
                                onClick={handlePdfView}
                                className="btn bg-bg-secondary text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#ff6137] capitalize">Read as pdf </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id='pdf-view' className='hidden'>
                <PDFViewer style={styles.viewer}>
                    {/* Start of the document*/}
                    <Document>
                        {/*render a single page*/}
                        <Page size={'A4'} style={styles.page}>
                            <View style={styles.centerImage}>
                                <Image style={styles.image} src={state?.img} />
                            </View>
                            <View style={styles.text}>
                                <Text>{state?.name}</Text>
                            </View>
                            <View style={styles.text2}>
                                <Text>By {state?.author}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text>{state?.description}</Text>
                            </View>

                        </Page>
                    </Document>
                </PDFViewer>
            </div>

        </section>
    );
};

export default ReadBook;