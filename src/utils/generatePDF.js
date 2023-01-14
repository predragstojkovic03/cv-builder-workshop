import { jsPDF } from 'jspdf';

const generatePDF = async (className = 'resumeDocument') => {
  const report = new jsPDF('portrait', 'pt', 'a4');
  report.html(document.querySelector(`.${className}`)).then(() => {
    console.log(report.getFontList());
    report.save('resume.pdf');
  });
};

export default generatePDF;
