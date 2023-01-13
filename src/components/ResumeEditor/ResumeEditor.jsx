import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Button from '../Button/Button';
import './ResumeEditor.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeEditor = ({ personalDetails, setPersonalDetails }) => {
  const generatePDF = async () => {
    // const pdf = new jsPDF('portrait', 'pt', 'a4');
    // const data = await html2canvas(document.querySelector('#resume'));
    // const img = data.toDataURL('image/png');
    // const imgProperties = pdf.getImageProperties(img);
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    // pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    // pdf.save('shipping_label.pdf');

    const report = new jsPDF('portrait', 'pt', 'a4');
    report.addFont('Mulish');
    report.html(document.querySelector('.resumeDocument')).then(() => {
      report.save('resume.pdf');
    });
  };

  return (
    <div className='resumeEditorWrapper'>
      <div className='resumeEditorHeading'>Create your Resume</div>

      <form>
        <PersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <Button styleClasses='btn btn-primary' onClick={generatePDF}>
          Generate PDF
        </Button>
      </form>
    </div>
  );
};

export default ResumeEditor;
