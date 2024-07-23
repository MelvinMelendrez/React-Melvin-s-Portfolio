import React, { useState, useEffect } from 'react';
import styles from '../styles/components/ListComponent.module.scss';
import { ListComponentProps, Post, Tab } from '../interfaces';

const ListComponent: React.FC<ListComponentProps> = ({ data, tabs, title = 'title' }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const [tabsVisible, setTabsVisible] = useState(false);

    const toggleInputVisibility = () => {
        setInputVisible(!inputVisible);
        setSearchTerm('');
    };

    const toggleTabsVisibility = () => {
        setTabsVisible(!tabsVisible);
        setActiveTab(0);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setSelectedPost(null);
        setModalOpen(false);
    };

    const defaultTab: Tab = { tag: 'todos', filtro: '' };
    const tabList = tabs ? [defaultTab, ...tabs] : [defaultTab];

    const filteredPosts = data
        .filter((post) => {
            if (activeTab === 0 && tabList[activeTab].tag === 'todos') return true;
            const categoryMatches = post.tab === tabList[activeTab].filtro;
            return categoryMatches;
        })
        .filter((post) => {
            const extractText = (node: React.ReactNode): string => {
                if (typeof node === 'string') return node.toLowerCase();
                if (Array.isArray(node)) return node.map(extractText).join(' ');
                if (React.isValidElement(node) && node.props.children) return extractText(node.props.children);
                return '';
            };

            const contentText = extractText(post.contenido);

            return (
                post.titulo.toLowerCase().includes(searchTerm) ||
                contentText.includes(searchTerm)
            );
        });

    const handlePostClick = (post: Post) => {
        setSelectedPost(post);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add(styles.overflowHidden);
        } else {
            document.body.classList.remove(styles.overflowHidden);
        }
        return () => {
            document.body.classList.remove(styles.overflowHidden);
        };
    }, [modalOpen]);


    return (
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                <div className={styles.tabs}>
                    {tabsVisible && (
                        tabList.map((tab, index) => (
                            <button
                                key={index}
                                className={activeTab === index ? styles.activeTab : styles.tab}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.tag}
                            </button>
                        ))
                    )}
                </div>
            </div>


            <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <span>{title}</span>
                        <div className={styles.searchContainer}>
                            {inputVisible && (
                                <input
                                    type="text"
                                    className={styles.searchInput}
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoFocus
                                />
                            )}
                        </div>
                        <div className={styles.icons}>
                            <button className={styles.buttonInput} onClick={toggleTabsVisibility}>🖇️</button>
                            <button className={styles.buttonInput} onClick={toggleInputVisibility}>🔍</button>
                        </div>
                    </div>
                    <div>
                        {filteredPosts.map((post, index) => (
                            <div key={index}>
                                <div
                                    className={`${styles.tableCell} ${styles.td}`}
                                    onClick={() => handlePostClick(post)}
                                >
                                    {post.titulo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {modalOpen && selectedPost && (
                <div
                    id="modalOverlay"
                    className={styles.modalOverlay}
                    onClick={closeModal}
                >
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closeModal} className={styles.modalButton}>X</button>
                        <div className={styles.modalTitle}>{selectedPost.titulo}</div>
                        <div className={styles.content}>{selectedPost.contenido}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListComponent;
