import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    // 현재 경로에 따라 활성 버튼 결정
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header style={{
            width: "94vw",
            backgroundColor: '#2D3748',
            color: 'white',
            padding: '1rem',
            marginBottom: '1rem',
            marginLeft: '12px',
            marginRight: '12px',
            borderRadius: '8px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
                    OneDay English
                </h1>

                <nav style={{ display: 'flex', gap: '1rem' }}>
                    <Link
                        to="/"
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: isActive('/') ? '#4A90E2' : '#4A5568',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        📚 학습 모드
                    </Link>

                    <Link
                        to="/remind"
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: isActive('/remind') ? '#4A90E2' : '#4A5568',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        🧠 리마인드 모드
                    </Link>

                    <Link
                        to="/setting"
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: isActive('/setting') ? '#4A90E2' : '#4A5568',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        ⚙️ 단어 관리
                    </Link>
                </nav>
            </div>
        </header>
    );
}