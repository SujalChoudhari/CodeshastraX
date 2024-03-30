"use client"
import React, { useState } from 'react';

const Browser: React.FC = () => {
 const [url, setUrl] = useState<string>('');
 const [htmlContent, setHtmlContent] = useState<string>('');

 const fetchHtmlContent = async () => {
    try {
      const response = await fetch(url);
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHtmlContent(data.html_content);
    } catch (error) {
      console.error('Error fetching HTML content:', error);
    }
 };

 return (
    <div>
      <input 
        type="text" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        placeholder="Enter URL" 
      />
      <button onClick={fetchHtmlContent}>Fetch HTML Content</button>
      <div>
        <pre>{htmlContent}</pre>
      </div>
    </div>
 );
};

export default Browser;
