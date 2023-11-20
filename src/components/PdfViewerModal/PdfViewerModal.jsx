import React, { useEffect, useRef, useState } from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import "./style.css";
import pdfUrl from '../../assets/test.pdf'

// Set up pdf.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PdfViewerModal = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="modal-pdf">
      <Document
        inputRef={pdfRef}
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          width={pdfRef.current?.clientWidth}
          height={pdfRef.current?.clientHeight}
        />
      </Document>
      <p>
        <span onClick={() => pageNumber > 1 ? setPageNumber(pageNumber - 1) : null}>
          &lt;
        </span>
        <span>{pageNumber} / {numPages}</span>
        <span onClick={() => pageNumber < numPages ? setPageNumber(pageNumber + 1) : null}>
          &gt;
        </span>
      </p>
      <button className="close-btn" onClick={onClose}>
        확인
      </button>
    </div>
  );
};