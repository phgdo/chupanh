// pages/index.js
import { useState, useEffect } from "react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../lib/firebaseConfig";

export default function Home() {
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");

  // Tải ảnh từ Firestore theo tag
  const fetchImages = async () => {
    const q = query(collection(db, "images"), where("tags", "array-contains-any", tags.split(',')));
    const querySnapshot = await getDocs(q);
    setImages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchImages();
  }, [tags]);

  // Xử lý tải ảnh lên Firebase Storage và lưu thông tin ảnh
  const handleUpload = async () => {
    if (password !== "Abcd@1234") {
      alert("Mật khẩu không đúng!");
      return;
    }
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      await addDoc(collection(db, "images"), {
        url,
        tags: tags.split(',').map(tag => tag.trim().toLowerCase()),
        uploadedAt: new Date(),
      });

      setFile(null);
      setTags("");
      fetchImages();
    } else {
      alert("Chọn một file để upload!");
    }
  };

  return (
    <div>
      <h1>Thư viện Ảnh</h1>

      {/* Phần tìm kiếm */}
      <input
        type="text"
        placeholder="Nhập tag tìm kiếm (vd: ngoi, thuvien)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={fetchImages}>Tìm kiếm</button>

      {/* Hiển thị ảnh */}
      <div>
        {images.map(image => (
          <div key={image.id}>
            <img src={image.url} alt="Uploaded Image" width={200} />
            <p>Tags: {image.tags.join(", ")}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* Phần upload ảnh */}
      <h2>Tải ảnh lên</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Nhập tags, phân cách bởi dấu phẩy"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUpload}>Tải lên</button>
    </div>
  );
}
