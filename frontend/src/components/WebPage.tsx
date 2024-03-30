import axios from 'axios';
import React, { useEffect, useState } from 'react'

function WebPage() {
    const [htmlContent, setHTMLContent] = useState("")
  const [browserAddress, setBrowserAddress] = useState("")



  function replaceRelativeLinks(html: string) {
    // Create a DOM element to parse the HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    // Find all <a> elements with href attribute
    const anchorElements = tempElement.querySelectorAll('a[href]');

    // Replace relative links with absolute links
    anchorElements.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (href && !href.startsWith('http')) { // Check if href is relative
        // Replace relative link with browserAddress + relative link
        anchor.setAttribute('href', browserAddress + href);
      }
    });

    // Return the modified HTML
    return tempElement.innerHTML;
  }


  async function fetchData() {
    try {
      if (browserAddress == "") {
        setHTMLContent("Web Pages will be shown Here")
        return
      }
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/${browserAddress}`, {
        // Add any necessary options for the request
      });
      const modifiedHTML: string = replaceRelativeLinks(response.data);
      setHTMLContent(modifiedHTML);
    } catch (error) {
      console.error('Error fetching data:', error);

      // Open a popup window with the browser address on error
      const popupWindow = window.open(
        browserAddress,
        '_blank',
        `width=${660},height=${screen.height},left=${screen.width / 2 - 660 / 2},toolbar=no,scrollbars=yes,status=no,resizable=yes`
      );

      setHTMLContent("<div className='flex items-center justify-center'> We opened the Webpage in Popup for better Experience.</div>")
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1000); // Adjust the delay time as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [browserAddress]);
  return (
    <div className="flex flex-col items-center h-full bg-white">
            <div className="flex items-center justify-between w-full  p-4 border-b">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 bg-[#FF605C] rounded-full" />
                <div className="w-3 h-3 bg-[#FFBD44] rounded-full" />
                <div className="w-3 h-3 bg-[#00CA4E] rounded-full" />
              </div>
              <span className="text-md ">{browserAddress}</span>
              <div />
            </div>
            {/* WEBPAGE */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

          </div>
  )
}

export default WebPage