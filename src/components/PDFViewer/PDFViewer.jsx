import React, { useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { pdf } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function removeTextLayerOffset() {
  // const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
  // textLayers.forEach((layer) => {
  //   const { style } = layer;
  //   style.display = 'none';
  // });
  // const annotationLayers = document.querySelectorAll(
  //   '.react-pdf__Page__annotations'
  // );
  // annotationLayers.forEach((layer) => {
  //   const { style } = layer;
  //   style.display = 'none';
  // });
}

const PDFViewer = ({ children }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const child = React.Children.only(children);

    pdf(child)
      .toBlob()
      .then((blob) => {
        setPdfUrl(URL.createObjectURL(blob));
      });
  }, [children]);

  return (
    <Document file={pdfUrl}>
      <Page
        className={'PDFPage'}
        renderMode='canvas'
        renderAnnotationLayer={false}
        renderTextLayer={false}
        pageNumber={1}
        onLoadSuccess={removeTextLayerOffset}
      />
    </Document>
  );
};

export default PDFViewer;
