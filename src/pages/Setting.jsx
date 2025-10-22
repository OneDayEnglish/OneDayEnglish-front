import { useContext, useState } from 'react';
import { VocabularyContext } from '../App';

export default function Setting() {
    const { vocabulary, setVocabulary } = useContext(VocabularyContext);
    const [newWord, setNewWord] = useState({ eng: '', kr: '' });
    const [koreanMeanings, setKoreanMeanings] = useState('');

    // 새 단어 추가
    const handleAddWord = () => {
        if (newWord.eng.trim() && koreanMeanings.trim()) {
            const meanings = koreanMeanings.split(',').map(meaning => meaning.trim());
            const newVocabulary = [...vocabulary, { eng: newWord.eng.trim(), kr: meanings }];
            setVocabulary(newVocabulary);
            setNewWord({ eng: '', kr: '' });
            setKoreanMeanings('');
        }
    };

    // 단어 삭제
    const handleDeleteWord = (index) => {
        const newVocabulary = vocabulary.filter((_, i) => i !== index);
        setVocabulary(newVocabulary);
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#2D3748', marginBottom: '2rem' }}>
                ⚙️ 단어 관리
            </h1>
            <div style={{
                backgroundColor: '#F7FAFC',
                padding: '1.5rem',
                borderRadius: '8px',
                marginBottom: '2rem'
            }}>
                <h2 style={{ color: '#4A5568', marginBottom: '1rem' }}>새 단어 추가</h2>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        영어 단어:
                    </label>
                    <input
                        type="text"
                        value={newWord.eng}
                        onChange={(e) => setNewWord({ ...newWord, eng: e.target.value })}
                        placeholder="예: Develop"
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: '1px solid #E2E8F0',
                            borderRadius: '4px',
                            fontSize: '1rem'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        한국어 뜻 (쉼표로 구분):
                    </label>
                    <input
                        type="text"
                        value={koreanMeanings}
                        onChange={(e) => setKoreanMeanings(e.target.value)}
                        placeholder="예: 개발하다, 발전시키다"
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: '1px solid #E2E8F0',
                            borderRadius: '4px',
                            fontSize: '1rem'
                        }}
                    />
                </div>

                <button
                    onClick={handleAddWord}
                    style={{
                        backgroundColor: '#4A90E2',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    ➕ 단어 추가
                </button>
            </div>
            <div>
                <h2 style={{ color: '#4A5568', marginBottom: '1rem' }}>
                    현재 단어 목록 ({vocabulary.length}개)
                </h2>

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {vocabulary.map((word, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                border: '1px solid #E2E8F0',
                                borderRadius: '8px',
                                padding: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <strong style={{ fontSize: '1.2rem', color: '#2D3748' }}>
                                    {word.eng}
                                </strong>
                                <div style={{ color: '#718096', marginTop: '0.25rem' }}>
                                    {word.kr.join(', ')}
                                </div>
                            </div>

                            <button
                                onClick={() => handleDeleteWord(index)}
                                style={{
                                    backgroundColor: '#E53E3E',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '0.5rem 1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                🗑️ 삭제
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}