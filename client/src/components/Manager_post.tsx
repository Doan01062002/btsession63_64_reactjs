import axios from "axios";
import React, { useEffect, useState } from "react";

interface ManagerPost {
  id: number;
  name: string;
  image: string;
  create_date: string;
  status: boolean;
  content: string;
}

export default function Manager_post() {
  const [posts, setPosts] = useState<ManagerPost[]>([]);

  // Render dữ liệu
  const getData = () => {
    axios
      .get("http://localhost:3000/manager-post")
      .then((data) => setPosts(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Nhập từ khóa tìm kiếm"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lọc bài viết
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      A-Z
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Z-A
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-primary">
              Thêm mới bài viết
            </button>
          </div>
        </div>
      </nav>
      {/* Bảng hiển thị */}
      <table className="table">
        <thead>
          <tr className="table-secondary">
            <th scope="col">STT</th>
            <th scope="col">Tiêu đề</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Ngày viết</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>
                <img className="img-post" src={item.image} alt="" />
              </td>
              <td>{item.create_date}</td>
              <td>
                <button type="button" className="btn btn-outline-success">
                  Đã xuất bản
                </button>
              </td>
              <td className="action-btn">
                <button type="button" className="btn btn-warning">
                  Chặn
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Sửa
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
