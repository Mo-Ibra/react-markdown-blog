import { useContext, useEffect, useState } from 'react';
import { PrismLight as SyntaxHightligher } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon, PasteIcon } from '../Assets/Icons';
import './code.css';
import { ThemeContext } from '../../App';

const Code = ({ children }) => {

    const [copied, setCopied] = useState(false);

    const { isDark } = useContext(ThemeContext);

    useEffect(() => {

        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)

        return () => clearTimeout(timer)

    }, [copied])

    return (
        <div className="code">
            <CopyToClipboard
                text={children}
                onCopy={() => setCopied(true)}
            >
                <button className='icon copy-icon'>
                    {copied ? <PasteIcon /> : <CopyIcon />}
                </button>
            </CopyToClipboard>
            <SyntaxHightligher
                language="javascript"
                style={isDark ? materialDark : materialLight}
            >
                {children}
            </SyntaxHightligher>
        </div>
    )
}

export default Code;