import React, { useEffect, useState } from 'react';
import './AdminTicket.css';
import NavbarAdmin from '../../Components/Navbar Admin/NavbarAdmin';
import { getAllMovie, addMovie, updateMovie } from '../../services/movieService';

const AdminMovie = () => {
    const [movies, setMovies] = useState([]); // Danh sách phim
    const [showForm, setShowForm] = useState(false); // Hiển thị form thêm hoặc chỉnh sửa phim
    const [isEdit, setIsEdit] = useState(false); // Biến xác định xem có phải đang chỉnh sửa không
    const [selectedMovieId, setSelectedMovieId] = useState(null); // ID phim đang chỉnh sửa
    const [Name, setName] = useState('');
    const [Genre, setGenre] = useState('');
    const [Duration, setDuration] = useState('');
    const [Price, setPrice] = useState('');
    const [Directors, setDirectors] = useState('');
    const [Actors, setActors] = useState('');
    const [url_image_title, setUrlImageTitle] = useState('');
    const [url_image_banner, setUrlImageBanner] = useState('');
    const [search, setSearch] = useState(''); // State cho tìm kiếm phim

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getAllMovie();
                setMovies(data.data);
            } catch (err) {
                console.error('Lỗi khi lấy danh sách phim:', err);
            }
        };

        fetchMovies();
    }, []);

    const filteredMovies = movies.filter(movie =>
        movie.name.toLowerCase().includes(search.toLowerCase()) ||
        movie.genre.toLowerCase().includes(search.toLowerCase())
    );

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (name === "Name") setName(value);
        if (name === "Genre") setGenre(value);
        if (name === "Duration") setDuration(value);
        if (name === "Price") setPrice(value);
        if (name === "Directors") setDirectors(value);
        if (name === "Actors") setActors(value);
        if (name === "url_image_title") setUrlImageTitle(value);
        if (name === "url_image_banner") setUrlImageBanner(value);
    };

    const handleAddMovie = async () => {
        if (!Name || !Genre || !Duration || !Price || !Directors || !Actors) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        try {
            const newMovie = await addMovie(
                Name,
                Genre,
                Duration,
                Price,
                Directors,
                Actors,
                url_image_title,
                url_image_banner,
            );

            setMovies((prevMovies) => [...prevMovies, newMovie]);
            setShowForm(false);
            alert("Thêm phim thành công!");

            setName('');
            setGenre('');
            setDuration('');
            setPrice('');
            setDirectors('');
            setActors('');
            setUrlImageTitle('');
            setUrlImageBanner('');
        } catch (err) {
            console.error('Lỗi khi thêm phim:', err);
            alert("Có lỗi xảy ra, vui lòng thử lại.");
        }
    };

    const handleEditMovie = (movie) => {
        setIsEdit(true);
        setSelectedMovieId(movie.id);
        setName(movie.name);
        setGenre(movie.genre);
        setDuration(movie.duration);
        setPrice(movie.price);
        setDirectors(movie.directors);
        setActors(movie.actors);
        setUrlImageTitle(movie.url_image_title || '');
        setUrlImageBanner(movie.url_image_banner || '');
        setShowForm(true);
    };

    const handleUpdateMovie = async () => {
        if (!Name || !Genre || !Duration || !Price || !Directors || !Actors) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        try {
            const updatedMovie = await updateMovie(selectedMovieId,
                Name,
                Genre,
                Duration,
                Price,
                Directors,
                Actors,
                url_image_title,
                url_image_banner,
            );


            setMovies((prevMovies) =>
                prevMovies.map((movie) =>
                    movie.id === selectedMovieId ? updatedMovie : movie
                )
            );

            setShowForm(false);
            alert("Cập nhật phim thành công!");


            setIsEdit(false);
            setSelectedMovieId(null);
            setName('');
            setGenre('');
            setDuration('');
            setPrice('');
            setDirectors('');
            setActors('');
            setUrlImageTitle('');
            setUrlImageBanner('');
        } catch (err) {
            console.error('Lỗi khi cập nhật phim:', err);
            alert("Có lỗi xảy ra, vui lòng thử lại.");
        }
    };

    return (
        <div className="admin-container">
            <NavbarAdmin />

            <main className="admin-content">
                <header className="admin-header">
                    <input
                        type="text"
                        placeholder="Tìm kiếm phim..."
                        className="admin-search-bar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="admin-user-info">
                        <span>Nguyen Duc Hoa</span>
                        <img src="user-avatar.png" alt="User Avatar" className="admin-avatar" />
                    </div>
                </header>

                <div className="admin-management">
                    <h1 className="admin-title">Quản lí phim</h1>
                    <button className="add-movie-btn" onClick={() => setShowForm(true)}>
                        Thêm Phim
                    </button>

                    {showForm && (
                        <div className="overlay">
                            <div className="add-movie-form">
                                <h2>{isEdit ? "Cập nhật Phim" : "Thêm Phim Mới"}</h2>
                                <form onSubmit={isEdit ? handleUpdateMovie : handleAddMovie}>
                                    {/* Các input form như cũ */}
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            name="Name"
                                            value={Name}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Genre:</label>
                                        <input
                                            type="text"
                                            name="Genre"
                                            value={Genre}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Duration:</label>
                                        <input
                                            type="number"
                                            name="Duration"
                                            value={Duration}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input
                                            type="number"
                                            name="Price"
                                            value={Price}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Directors:</label>
                                        <input
                                            type="text"
                                            name="Directors"
                                            value={Directors}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Actors:</label>
                                        <input
                                            type="text"
                                            name="Actors"
                                            value={Actors}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>URL Image Title:</label>
                                        <input
                                            type="text"
                                            name="url_image_title"
                                            value={url_image_title}
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>URL Image Banner:</label>
                                        <input
                                            type="text"
                                            name="url_image_banner"
                                            value={url_image_banner}
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                    <div className="form-buttons">
                                        <button type="submit" className="submit-btn">
                                            {isEdit ? "Cập nhật" : "Xác nhận"}
                                        </button>
                                        <button
                                            type="button"
                                            className="cancel-btn"
                                            onClick={() => setShowForm(false)}
                                        >
                                            Hủy
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMovies.map((movie) => (
                                <tr key={movie.id}>
                                    <td>{movie.id}</td>
                                    <td>{movie.name}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.duration}</td>
                                    <td>{movie.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEditMovie(movie)}
                                            className="edit-btn"
                                        >
                                            Sửa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminMovie;
