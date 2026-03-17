"use client";
import React, { useState } from 'react';

export default function CreateBookPage() {
  // Stocăm datele text
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    gen: 'ROMANCE', // Setăm o valoare default din enum-ul tău Prisma
    buyLink: '',
    writtenAt: '',
    author: ''
  });

  // Stocăm fișierul separat
  const [imageFile, setImageFile] = useState(null);

  // Stări pentru UI (încărcare, eroare, succes)
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  // Handler pentru inputurile de text
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler pentru inputul de tip file
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Funcția care trimite datele către backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      // 1. Creăm obiectul FormData obligatoriu pentru fisiere
      const formData = new FormData();
      
      // Adăugăm datele text în formData
      formData.append('title', bookData.title);
      formData.append('description', bookData.description);
      formData.append('gen', bookData.gen);
      formData.append('writtenAt', bookData.writtenAt);
      formData.append('author', bookData.author);
      
      if (bookData.buyLink) {
        formData.append('buyLink', bookData.buyLink);
      }

      // Adăugăm imaginea dacă există
      if (imageFile) {
        formData.append('image', imageFile); // 'image' trebuie să corespundă cu uploadMiddleware.single("image") din backend
      }

      // 2. Facem request-ul către backend
      // IMPORTANT: Înlocuiește URL-ul cu cel corect către backend-ul tău
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        // ATENȚIE: Nu seta 'Content-Type': 'multipart/form-data' manual! 
        // Browserul o va face automat și va adăuga un "boundary" necesar.
        headers: {
          // Dacă folosești JWT Token pentru checkUser, îl pui aici:
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ceva nu a funcționat.');
      }

      // Succes!
      setStatus({ loading: false, error: null, success: true });
      console.log('Carte creată:', data.book);

      // (Opțional) Resetează formularul aici
      
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>Adaugă o carte nouă</h2>

      {status.error && <p style={{ color: 'red' }}>Eroare: {status.error}</p>}
      {status.success && <p style={{ color: 'green' }}>Cartea a fost creată cu succes!</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label>
          Titlu:*
          <input type="text" name="title" required value={bookData.title} onChange={handleInputChange} style={{ width: '100%' }} />
        </label>

        <label>
          Autor:*
          <input type="text" name="author" required value={bookData.author} onChange={handleInputChange} style={{ width: '100%' }} />
        </label>

        <label>
          Descriere:*
          <textarea name="description" required value={bookData.description} onChange={handleInputChange} style={{ width: '100%', minHeight: '80px' }} />
        </label>

        <label>
          Gen:*
          <select name="gen" value={bookData.gen} onChange={handleInputChange} style={{ width: '100%' }}>
            <option value="ROMANCE">Romance</option>
            <option value="ACTION">Action</option>
            <option value="FICTION">Fiction</option>
            <option value="THRILLER">Thriller</option>
            <option value="PERSONAL_DEVELOPMENT">Personal Development</option>
            <option value="FOR_KIDS">For Kids</option>
            <option value="HISTORICAL">Historical</option>
            <option value="HORROR">Horror</option>
          </select>
        </label>

        <label>
          Anul scrierii / Data (ex: 1998):*
          <input type="text" name="writtenAt" required value={bookData.writtenAt} onChange={handleInputChange} style={{ width: '100%' }} />
        </label>

        <label>
          Link Cumpărare:
          <input type="text" name="buyLink" value={bookData.buyLink} onChange={handleInputChange} style={{ width: '100%' }} />
        </label>

        <label>
          Imagine Copertă:
          <input type="file" accept="image/*" onChange={handleFileChange} style={{ width: '100%' }} />
        </label>

        <button type="submit" disabled={status.loading} style={{ padding: '10px', cursor: 'pointer' }}>
          {status.loading ? 'Se încarcă...' : 'Creează Cartea'}
        </button>
      </form>
    </div>
  );
}