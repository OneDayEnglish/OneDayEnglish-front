import { useContext, useState } from 'react';
import { VocabularyContext } from '../App'; // App.jsx에 Context가 정의되어 있다고 가정

// 단어 목록을 보여주는 스타일 (CSS-in-JS)
const styles = {
    container: { padding: '2rem', maxWidth: '900px', margin: '0 auto' },
    header: { color: '#2D3748', marginBottom: '2rem', textAlign: 'center' },
    wordList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px', // 단어 카드 간 간격
        justifyContent: 'center',
    },
    wordCard: {
        backgroundColor: 'white',
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        padding: '1.5rem',
        width: '200px', // 카드의 너비
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.1s, box-shadow 0.1s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '120px', // 최소 높이 지정
    },
    englishWord: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#4A90E2', // 영어 단어 색상
        marginBottom: '10px',
    },
    koreanMeaning: {
        fontSize: '1rem',
        color: '#4A5568',
        marginTop: '10px',
        paddingTop: '10px',
        borderTop: '1px dashed #E2E8F0',
        width: '100%',
        textAlign: 'center',
    },
    placeholder: {
        color: '#718096',
        textAlign: 'center',
        padding: '4rem',
    }
};

export default function Vocabularies() {
    // 1. Context에서 영단어 목록(vocabulary)을 가져옵니다.
    // (파일 이름이 Vocabularies.jsx이지만, 기존 파일명이 Library여서 이름 변경 후 사용합니다.)
    const { vocabulary } = useContext(VocabularyContext);
    
    // 2. 각 단어의 뜻이 보이는지 상태를 관리하는 State를 만듭니다.
    // { 0: false, 1: true, ... } 형태로 관리합니다.
    const [visibleMeanings, setVisibleMeanings] = useState({});

    // 3. 단어 카드 클릭 시 뜻 표시 여부를 토글하는 함수
    const handleWordClick = (index) => {
        setVisibleMeanings(prev => ({
            ...prev,
            [index]: !prev[index] // 현재 상태의 반대로 토글
        }));
    };

    // 단어 목록이 비어있을 때
    if (vocabulary.length === 0) {
        return (
            <div style={styles.container}>
                <h1 style={styles.header}>📚 영단어 전체 리스트</h1>
                <p style={styles.placeholder}>
                    아직 추가된 단어가 없습니다. "⚙️ 단어 관리" 페이지에서 단어를 추가해 주세요.
                </p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>📚 영단어 전체 리스트 ({vocabulary.length}개)</h1>
            <p style={{ textAlign: 'center', color: '#718096', marginBottom: '20px' }}>
                단어를 클릭하면 뜻이 보입니다!
            </p>
            
            <div style={styles.wordList}>
                {vocabulary.map((word, index) => {
                    // 현재 단어의 뜻이 보여야 하는지 확인합니다.
                    const isMeaningVisible = visibleMeanings[index];
                    
                    return (
                        <div 
                            key={index} 
                            style={styles.wordCard}
                            onClick={() => handleWordClick(index)} // 클릭 이벤트 추가
                        >
                            <div style={styles.englishWord}>
                                {word.eng}
                            </div>
                            
                            {/* 4. isMeaningVisible 상태에 따라 뜻 표시/숨김 */}
                            {isMeaningVisible && (
                                <div style={styles.koreanMeaning}>
                                    {/* 배열로 된 뜻을 쉼표와 공백으로 연결하여 표시 */}
                                    {word.kr.join(', ')}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// 기존 파일명이 Library였으므로, 파일명을 Vocalbaries.jsx로 변경했음을 가정하고 컴포넌트 이름도 Vocabularies로 변경했습니다.