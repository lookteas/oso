// 计算机英语词汇库
const vocabularyData = {
    basic: [
        'computer', 'program', 'software', 'hardware', 'database', 'network', 'internet', 'website',
        'application', 'system', 'function', 'variable', 'array', 'object', 'string', 'number',
        'boolean', 'null', 'undefined', 'console', 'debug', 'error', 'warning', 'info',
        'class', 'method', 'property', 'parameter', 'argument', 'return', 'loop', 'condition',
        'algorithm', 'data', 'structure', 'memory', 'storage', 'processor', 'server', 'client',
        'file', 'folder', 'directory', 'path', 'extension', 'format', 'binary', 'text',
        'input', 'output', 'keyboard', 'mouse', 'monitor', 'screen', 'display', 'resolution',
        'operating', 'windows', 'linux', 'macos', 'android', 'ios', 'mobile', 'desktop',
        'browser', 'chrome', 'firefox', 'safari', 'edge', 'html', 'css', 'javascript',
        'python', 'java', 'cpp', 'csharp', 'php', 'ruby', 'swift', 'kotlin',
        'compile', 'execute', 'runtime', 'syntax', 'semantic', 'logic', 'bug', 'fix',
        'update', 'upgrade', 'install', 'uninstall', 'download', 'upload', 'sync', 'backup',
        'user', 'admin', 'root', 'guest', 'account', 'profile', 'settings', 'preferences',
        'search', 'filter', 'sort', 'index', 'query', 'result', 'record', 'field'
    ],
    intermediate: [
        'framework', 'library', 'dependency', 'repository', 'version', 'control', 'deployment', 'testing',
        'debugging', 'optimization', 'performance', 'scalability', 'architecture', 'design', 'pattern',
        'inheritance', 'polymorphism', 'encapsulation', 'abstraction', 'interface', 'implementation',
        'asynchronous', 'synchronous', 'callback', 'promise', 'async', 'await', 'exception', 'handling',
        'authentication', 'authorization', 'encryption', 'security', 'vulnerability', 'protocol', 'API',
        'middleware', 'endpoint', 'request', 'response', 'header', 'body', 'status', 'code',
        'database', 'sql', 'nosql', 'mongodb', 'mysql', 'postgresql', 'redis', 'elasticsearch',
        'frontend', 'backend', 'fullstack', 'react', 'vue', 'angular', 'node', 'express',
        'component', 'module', 'package', 'namespace', 'scope', 'closure', 'prototype', 'constructor',
        'event', 'listener', 'handler', 'trigger', 'emit', 'subscribe', 'publish', 'observer',
        'state', 'props', 'context', 'reducer', 'action', 'dispatch', 'store', 'immutable',
        'routing', 'navigation', 'redirect', 'guard', 'middleware', 'interceptor', 'filter', 'pipe',
        'validation', 'sanitization', 'serialization', 'deserialization', 'parsing', 'formatting', 'encoding', 'decoding',
        'caching', 'session', 'cookie', 'token', 'jwt', 'oauth', 'cors', 'csrf',
        'testing', 'unit', 'integration', 'e2e', 'mock', 'stub', 'spy', 'assertion'
    ],
    advanced: [
        'microservices', 'containerization', 'orchestration', 'kubernetes', 'docker', 'devops', 'cicd',
        'infrastructure', 'cloud', 'computing', 'distributed', 'systems', 'load', 'balancing',
        'caching', 'indexing', 'sharding', 'replication', 'consistency', 'availability', 'partition',
        'tolerance', 'eventual', 'consistency', 'consensus', 'algorithm', 'byzantine', 'fault',
        'machine', 'learning', 'artificial', 'intelligence', 'neural', 'network', 'deep', 'learning',
        'serverless', 'lambda', 'function', 'edge', 'computing', 'cdn', 'aws', 'azure',
        'google', 'cloud', 'platform', 'terraform', 'ansible', 'jenkins', 'gitlab', 'github',
        'monitoring', 'logging', 'metrics', 'alerting', 'observability', 'tracing', 'profiling', 'debugging',
        'scalability', 'elasticity', 'autoscaling', 'horizontal', 'vertical', 'throughput', 'latency', 'bottleneck',
        'security', 'penetration', 'vulnerability', 'assessment', 'firewall', 'intrusion', 'detection', 'prevention',
        'blockchain', 'cryptocurrency', 'bitcoin', 'ethereum', 'smart', 'contract', 'decentralized', 'consensus',
        'quantum', 'computing', 'qubit', 'superposition', 'entanglement', 'algorithm', 'cryptography', 'encryption',
        'big', 'data', 'analytics', 'hadoop', 'spark', 'kafka', 'stream', 'processing',
        'data', 'science', 'statistics', 'regression', 'classification', 'clustering', 'dimensionality', 'reduction',
        'natural', 'language', 'processing', 'computer', 'vision', 'reinforcement', 'learning', 'generative'
    ],
    code: [
        'function calculateSum(a, b) { return a + b; }',
        'const users = await fetch("/api/users").then(res => res.json());',
        'if (condition) { console.log("true"); } else { console.log("false"); }',
        'for (let i = 0; i < array.length; i++) { console.log(array[i]); }',
        'const promise = new Promise((resolve, reject) => { resolve("success"); });',
        'class User { constructor(name) { this.name = name; } }',
        'try { riskyOperation(); } catch (error) { console.error(error); }',
        'const result = array.map(item => item.value).filter(value => value > 0);',
        'import React, { useState, useEffect } from "react";',
        'export default function Component() { return <div>Hello World</div>; }',
        'const [state, setState] = useState(initialValue);',
        'useEffect(() => { fetchData(); }, [dependency]);',
        'app.get("/api/users", (req, res) => { res.json(users); });',
        'const express = require("express"); const app = express();',
        'SELECT * FROM users WHERE age > 18 ORDER BY name;',
        'CREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(255));',
        'git add . && git commit -m "Initial commit" && git push origin main',
        'docker build -t myapp . && docker run -p 3000:3000 myapp',
        'npm install express mongoose cors dotenv',
        'const mongoose = require("mongoose"); mongoose.connect("mongodb://localhost");',
        'interface User { id: number; name: string; email: string; }',
        'type ApiResponse<T> = { data: T; status: number; message: string; }',
        'async function fetchUserData(id: string): Promise<User> { return await api.get(`/users/${id}`); }',
        'const handleSubmit = (event: React.FormEvent) => { event.preventDefault(); };',
        'public class Calculator { public int add(int a, int b) { return a + b; } }',
        'def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)',
        'class Animal: def __init__(self, name): self.name = name',
        'with open("file.txt", "r") as f: content = f.read()',
        'import pandas as pd; df = pd.read_csv("data.csv")',
        'from sklearn.model_selection import train_test_split',
        'kubectl apply -f deployment.yaml && kubectl get pods',
        'terraform init && terraform plan && terraform apply',
        'version: "3.8" services: web: build: . ports: - "3000:3000"',
        'pipeline { agent any stages { stage("Build") { steps { sh "npm install" } } } }',
        'const config = { apiUrl: process.env.API_URL || "http://localhost:3000" };'
    ]
};

// 应用状态管理
class TypingApp {
    constructor() {
        this.currentText = '';
        this.currentIndex = 0;
        this.startTime = null;
        this.endTime = null;
        this.isTyping = false;
        this.isPaused = false;
        this.errors = 0;
        this.totalChars = 0;
        this.correctChars = 0;
        this.timer = null;
        this.currentMode = 'practice';
        this.difficulty = 'basic';
        this.practiceType = 'vocabulary'; // 新增：练习类型
        this.selectedDocument = 'software-documentation'; // 新增：选中的文档
        
        this.initializeElements();
        this.bindEvents();
        this.loadNewText();
        this.loadStats();
    }

    initializeElements() {
        // 获取DOM元素
        this.elements = {
            textContent: document.getElementById('textContent'),
            typingInput: document.getElementById('typingInput'),
            wpmDisplay: document.getElementById('wpm'),
            accuracyDisplay: document.getElementById('accuracy'),
            timeDisplay: document.getElementById('time'),
            errorsDisplay: document.getElementById('errors'),
            startBtn: document.getElementById('startBtn'),
            resetBtn: document.getElementById('resetBtn'),
            pauseBtn: document.getElementById('pauseBtn'),
            difficultySelect: document.getElementById('difficultySelect'),
            practiceTypeSelect: document.getElementById('practiceTypeSelect'), // 新增
            documentSelect: document.getElementById('documentSelect'), // 新增
            vocabularyOptions: document.getElementById('vocabularyOptions'), // 新增
            documentOptions: document.getElementById('documentOptions'), // 新增
            resultsPanel: document.getElementById('resultsPanel'),
            continueBtn: document.getElementById('continueBtn'),
            statsPage: document.getElementById('statsPage'),
            mainContent: document.querySelector('.main-content'),
            navBtns: document.querySelectorAll('.nav-btn')
        };
    }

    bindEvents() {
        // 绑定事件监听器
        this.elements.startBtn.addEventListener('click', () => this.startTyping());
        this.elements.resetBtn.addEventListener('click', () => this.resetTyping());
        this.elements.pauseBtn.addEventListener('click', () => this.pauseTyping());
        this.elements.continueBtn.addEventListener('click', () => this.continueTyping());
        this.elements.difficultySelect.addEventListener('change', (e) => this.changeDifficulty(e.target.value));
        this.elements.practiceTypeSelect.addEventListener('change', (e) => this.changePracticeType(e.target.value));
        this.elements.documentSelect.addEventListener('change', (e) => this.changeDocument(e.target.value));
        this.elements.typingInput.addEventListener('input', (e) => this.handleInput(e));
        this.elements.typingInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // 导航按钮事件
        this.elements.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchMode(e.target.dataset.mode));
        });
    }

    loadNewText() {
        if (this.practiceType === 'document') {
            // 文档练习模式
            if (this.selectedDocument && documentsData[this.selectedDocument]) {
                this.currentText = documentsData[this.selectedDocument].content;
            } else {
                // 如果没有选择文档，使用第一个文档
                const firstDocKey = Object.keys(documentsData)[0];
                this.selectedDocument = firstDocKey;
                this.currentText = documentsData[firstDocKey].content;
            }
        } else {
            // 词汇练习模式
            const words = vocabularyData[this.difficulty];
            if (this.difficulty === 'code') {
                // 对于代码模式，随机选择2-4个代码片段组合
                const selectedCode = [];
                const codeCount = 2 + Math.floor(Math.random() * 3); // 2-4个代码片段
                for (let i = 0; i < codeCount; i++) {
                    selectedCode.push(words[Math.floor(Math.random() * words.length)]);
                }
                this.currentText = selectedCode.join('\n\n');
            } else {
                // 生成更长的随机词汇组合
                const selectedWords = [];
                const wordCount = 30 + Math.floor(Math.random() * 40); // 30-70个单词
                for (let i = 0; i < wordCount; i++) {
                    selectedWords.push(words[Math.floor(Math.random() * words.length)]);
                }
                this.currentText = selectedWords.join(' ');
            }
        }
        
        this.displayText();
        this.resetStats();
    }

    displayText() {
        const chars = this.currentText.split('');
        this.elements.textContent.innerHTML = chars.map((char, index) => 
            `<span class="char" data-index="${index}">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
    }

    startTyping() {
        if (!this.isTyping) {
            this.isTyping = true;
            this.startTime = new Date();
            this.elements.typingInput.disabled = false;
            this.elements.typingInput.focus();
            this.elements.startBtn.disabled = true;
            this.elements.pauseBtn.disabled = false;
            this.startTimer();
        }
    }

    pauseTyping() {
        if (this.isTyping && !this.isPaused) {
            this.isPaused = true;
            this.elements.typingInput.disabled = true;
            this.elements.pauseBtn.textContent = '继续';
            this.stopTimer();
        } else if (this.isPaused) {
            this.isPaused = false;
            this.elements.typingInput.disabled = false;
            this.elements.typingInput.focus();
            this.elements.pauseBtn.textContent = '暂停';
            this.startTimer();
        }
    }

    resetTyping() {
        this.isTyping = false;
        this.isPaused = false;
        this.currentIndex = 0;
        this.errors = 0;
        this.totalChars = 0;
        this.correctChars = 0;
        this.startTime = null;
        this.endTime = null;
        
        this.elements.typingInput.value = '';
        this.elements.typingInput.disabled = true;
        this.elements.startBtn.disabled = false;
        this.elements.pauseBtn.disabled = true;
        this.elements.pauseBtn.textContent = '暂停';
        this.elements.resultsPanel.style.display = 'none';
        
        this.stopTimer();
        this.loadNewText();
    }

    handleInput(e) {
        if (!this.isTyping || this.isPaused) return;

        const inputValue = e.target.value;
        const inputLength = inputValue.length;
        
        // 更新字符状态
        this.updateCharacterStatus(inputValue);
        
        // 检查是否完成
        if (inputLength >= this.currentText.length) {
            this.finishTyping();
        }
    }

    handleKeyDown(e) {
        if (!this.isTyping || this.isPaused) return;
        
        // 防止某些按键的默认行为
        if (e.key === 'Tab') {
            e.preventDefault();
        }
    }

    updateCharacterStatus(inputValue) {
        const chars = document.querySelectorAll('.char');
        
        chars.forEach((char, index) => {
            char.classList.remove('correct', 'incorrect', 'current');
            
            if (index < inputValue.length) {
                if (inputValue[index] === this.currentText[index]) {
                    char.classList.add('correct');
                } else {
                    char.classList.add('incorrect');
                }
            } else if (index === inputValue.length) {
                char.classList.add('current');
            }
        });

        this.currentIndex = inputValue.length;
        this.updateStats();
    }

    updateStats() {
        const inputValue = this.elements.typingInput.value;
        this.totalChars = inputValue.length;
        this.correctChars = 0;
        this.errors = 0;

        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i] === this.currentText[i]) {
                this.correctChars++;
            } else {
                this.errors++;
            }
        }

        // 计算WPM
        const timeElapsed = this.getTimeElapsed();
        const wpm = timeElapsed > 0 ? Math.round((this.correctChars / 5) / (timeElapsed / 60)) : 0;
        
        // 计算准确率
        const accuracy = this.totalChars > 0 ? Math.round((this.correctChars / this.totalChars) * 100) : 100;

        // 更新显示
        this.elements.wpmDisplay.textContent = wpm;
        this.elements.accuracyDisplay.textContent = accuracy + '%';
        this.elements.errorsDisplay.textContent = this.errors;
    }

    getTimeElapsed() {
        if (!this.startTime) return 0;
        const currentTime = this.endTime || new Date();
        return (currentTime - this.startTime) / 1000;
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (!this.isPaused) {
                const timeElapsed = this.getTimeElapsed();
                const minutes = Math.floor(timeElapsed / 60);
                const seconds = Math.floor(timeElapsed % 60);
                this.elements.timeDisplay.textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                this.updateStats();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    finishTyping() {
        this.isTyping = false;
        this.endTime = new Date();
        this.elements.typingInput.disabled = true;
        this.elements.pauseBtn.disabled = true;
        this.stopTimer();
        
        this.showResults();
        this.saveResult();
    }

    showResults() {
        const timeElapsed = this.getTimeElapsed();
        const wpm = Math.round((this.correctChars / 5) / (timeElapsed / 60));
        const accuracy = Math.round((this.correctChars / this.totalChars) * 100);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = Math.floor(timeElapsed % 60);

        document.getElementById('finalWPM').textContent = wpm + ' WPM';
        document.getElementById('finalAccuracy').textContent = accuracy + '%';
        document.getElementById('finalTime').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('finalErrors').textContent = this.errors;

        this.elements.resultsPanel.style.display = 'block';
        this.elements.resultsPanel.scrollIntoView({ behavior: 'smooth' });
    }

    continueTyping() {
        this.elements.resultsPanel.style.display = 'none';
        this.resetTyping();
    }

    changeDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.resetTyping();
    }

    changePracticeType(type) {
        this.practiceType = type;
        
        // 显示/隐藏相应的选项
        if (type === 'vocabulary') {
            this.elements.vocabularyOptions.style.display = 'block';
            this.elements.documentOptions.style.display = 'none';
        } else if (type === 'document') {
            this.elements.vocabularyOptions.style.display = 'none';
            this.elements.documentOptions.style.display = 'block';
            
            // 初始化文档选择器
            this.initializeDocumentSelect();
        }
        
        this.resetTyping();
    }

    changeDocument(documentKey) {
        this.selectedDocument = documentKey;
        this.resetTyping();
    }

    initializeDocumentSelect() {
        // 清空现有选项
        this.elements.documentSelect.innerHTML = '';
        
        // 添加文档选项
        Object.keys(documentsData).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = documentsData[key].title;
            this.elements.documentSelect.appendChild(option);
        });
        
        // 设置默认选择
        if (Object.keys(documentsData).length > 0) {
            this.selectedDocument = Object.keys(documentsData)[0];
        }
    }

    switchMode(mode) {
        this.currentMode = mode;
        
        // 更新导航按钮状态
        this.elements.navBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // 显示对应页面
        if (mode === 'stats') {
            this.elements.mainContent.style.display = 'none';
            this.elements.statsPage.style.display = 'block';
            this.updateStatsPage();
        } else {
            this.elements.mainContent.style.display = 'block';
            this.elements.statsPage.style.display = 'none';
        }
    }

    saveResult() {
        const result = {
            date: new Date().toISOString(),
            wpm: Math.round((this.correctChars / 5) / (this.getTimeElapsed() / 60)),
            accuracy: Math.round((this.correctChars / this.totalChars) * 100),
            time: this.getTimeElapsed(),
            errors: this.errors,
            difficulty: this.difficulty
        };

        // 保存到localStorage
        let history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
        history.unshift(result);
        
        // 只保留最近100条记录
        if (history.length > 100) {
            history = history.slice(0, 100);
        }
        
        localStorage.setItem('typingHistory', JSON.stringify(history));
        
        // 更新统计数据
        this.updateOverallStats(result);
    }

    updateOverallStats(result) {
        let stats = JSON.parse(localStorage.getItem('typingStats') || '{}');
        
        // 初始化统计数据
        if (!stats.bestWPM) stats.bestWPM = 0;
        if (!stats.bestAccuracy) stats.bestAccuracy = 0;
        if (!stats.totalTime) stats.totalTime = 0;
        if (!stats.totalSessions) stats.totalSessions = 0;
        
        // 更新统计
        stats.bestWPM = Math.max(stats.bestWPM, result.wpm);
        stats.bestAccuracy = Math.max(stats.bestAccuracy, result.accuracy);
        stats.totalTime += result.time;
        stats.totalSessions += 1;
        
        // 今日统计
        const today = new Date().toDateString();
        if (!stats.today || stats.today.date !== today) {
            stats.today = {
                date: today,
                count: 0,
                totalWPM: 0,
                maxWPM: 0
            };
        }
        
        stats.today.count += 1;
        stats.today.totalWPM += result.wpm;
        stats.today.maxWPM = Math.max(stats.today.maxWPM, result.wpm);
        
        localStorage.setItem('typingStats', JSON.stringify(stats));
    }

    loadStats() {
        const stats = JSON.parse(localStorage.getItem('typingStats') || '{}');
        const today = new Date().toDateString();
        
        // 检查今日统计是否是今天的
        if (!stats.today || stats.today.date !== today) {
            stats.today = {
                date: today,
                count: 0,
                totalWPM: 0,
                maxWPM: 0
            };
        }
        
        return stats;
    }

    updateStatsPage() {
        const stats = this.loadStats();
        const history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
        
        // 更新今日统计
        document.getElementById('todayCount').textContent = stats.today?.count || 0;
        document.getElementById('todayAvgWPM').textContent = 
            stats.today?.count > 0 ? Math.round(stats.today.totalWPM / stats.today.count) : 0;
        document.getElementById('todayMaxWPM').textContent = stats.today?.maxWPM || 0;
        
        // 更新历史最佳
        document.getElementById('bestWPM').textContent = stats.bestWPM || 0;
        document.getElementById('bestAccuracy').textContent = (stats.bestAccuracy || 0) + '%';
        document.getElementById('totalTime').textContent = Math.round((stats.totalTime || 0) / 60) + '分钟';
        
        // 更新历史记录
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = '';
        
        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">暂无练习记录</p>';
        } else {
            history.slice(0, 20).forEach(record => {
                const date = new Date(record.date);
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <div class="history-date">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>
                    <div class="history-stats">
                        <span class="history-stat">WPM: ${record.wpm}</span>
                        <span class="history-stat">准确率: ${record.accuracy}%</span>
                        <span class="history-stat">用时: ${Math.floor(record.time / 60)}:${Math.floor(record.time % 60).toString().padStart(2, '0')}</span>
                        <span class="history-stat">难度: ${this.getDifficultyName(record.difficulty)}</span>
                    </div>
                `;
                historyList.appendChild(historyItem);
            });
        }
    }

    getDifficultyName(difficulty) {
        const names = {
            basic: '基础',
            intermediate: '中级',
            advanced: '高级',
            code: '代码'
        };
        return names[difficulty] || difficulty;
    }

    resetStats() {
        this.elements.wpmDisplay.textContent = '0';
        this.elements.accuracyDisplay.textContent = '100%';
        this.elements.timeDisplay.textContent = '00:00';
        this.elements.errorsDisplay.textContent = '0';
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const app = new TypingApp();
    // 初始化文档选择器
    app.initializeDocumentSelect();
});