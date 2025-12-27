function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = "green";
        alert("Correct Answer! ✅");
    } else {
        button.style.backgroundColor = "red";
        alert("Wrong Answer ❌ Try again!");
    }
}

window.addEventListener('DOMContentLoaded', () => {
  const { jsPDF } = window.jspdf;

  const pageContents = [
    {
      title: 'Overview & Impact on User Experience',
      body: `Front-end development builds the visible and interactive layers of web applications. It directly affects usability, accessibility, and how users perceive a product. A strong front-end ensures fast load times, clear navigation, consistent design systems, and delightful interactions that drive adoption and retention.`
    },
    {
      title: 'Common Technologies',
      body: `Common technologies include HTML for structure, CSS for visual styling and layout (Flexbox & Grid), and JavaScript for client-side behavior. Frameworks and libraries such as React, Vue, and Angular help build large-scale component-based UIs. Tooling (bundlers, linters), testing frameworks, accessibility practices, and performance optimization are also essential.`
    },
    {
      title: 'Roles, Responsibilities & Q&A',
      body: `Typical responsibilities: build UI components, collaborate with designers, ensure accessibility, optimize performance, write tests, and maintain CI/CD.\n\nQ&A: 1) HTML structures content. 2) React is commonly used for component UIs. 3) A11y stands for accessibility.`
    }
  ];

  document.getElementById('downloadPdf').addEventListener('click', () => {
    const doc = new jsPDF({unit:'pt',format:'a4'});
    const margin = 40;
    const pageWidth = doc.internal.pageSize.getWidth() - margin*2;

    pageContents.forEach((p, i) => {
      doc.setFontSize(16);
      doc.setTextColor(40);
      doc.text(p.title, margin, 60);
      doc.setFontSize(12);

      const lines = doc.splitTextToSize(p.body, pageWidth);
      doc.text(lines, margin, 90);

      if(i < pageContents.length -1) doc.addPage();
    });

    doc.save('front-end-developer-guide.pdf');
  });

  document.getElementById('printPdf').addEventListener('click', () => {
    window.print();
    });
    });