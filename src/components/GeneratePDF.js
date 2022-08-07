import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const GeneratePDF = () => {
  const createPDF = async () => {
    const doc = new jsPDF('1', 'pt');
    const resume = document.getElementById('resume-container');
    resume.style.border = 'none';
    await html2canvas(resume, {
      // allowTaint: true,
      // useCORS: true,
      width: 816,
    }).then((canvas) => {
      doc.addImage(canvas.toDataURL('image/png'), 'png', 1, 1)
    })
    doc.save('resume.pdf');
  }
  return (
    <button className='bg-green-400 p-4 text-white text-xl font-bold border hover:bg-green-600' onClick={createPDF}>Generate PDF</button>
  )
}

export default GeneratePDF