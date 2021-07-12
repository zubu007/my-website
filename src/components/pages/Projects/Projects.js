import React from 'react'
import Footer from '../../Footer'
import './Projects.css'
import {FaGithub} from 'react-icons/fa'

function Projects() {
    return (
        <> 
            <div className='main-container-projects'>
                <div className="project-container">
                    <h1>Violence Detection CNN-BiLSTM</h1>
                    <a href="https://github.com/zubu007/CNN-BiLSTM-Hockey-Model"><FaGithub className='giticon'/></a>
                    <p>Researching on Violence Detectionusing Deep Learning Techniques.Tested and trained 3 AI models, 2 ofthem consists of CNN, LSTM/BiLSTMand one using Transfer Learning.Further improved the model's accuracyby implementing Pose Estimation.</p>
                    <ul>
                        <li>Used the hockey fights Dataset to train the model</li>
                        <li>Frames were extracted from each video and fed into the model sequencially.</li>
                        <li>CNN part focused on the important parts on each frame and Bi-LSTM stored sequencial information of the frames.</li>
                        <li>The model achieved 98% accuracy on the validation part.</li>
                    </ul>
                </div>
                <div className="project-container">
                    <h1>Bangla NLP Reseach</h1>
                    <p>Using BERT to do POS tagging inBangla language. Skip-gram to predictmissing words in a sentence. Used a Part of Speech labeled dataset from univeristy of Illunois.
                        Trained a multilingual model of BERT network for word embeddings of the bangla words. As the dataset was hugely imbalanced, we used several different oversampling 
                        techniques such as SMOTE, ADASYN etc.  
                    </p>
                    <ul>
                        <li>BERT for word embeddings</li>
                        <li>POS tagging for Bangla language</li>
                        <li>Oversampling Techniques were used due to class imbalance in the dataset</li>
                    </ul>
                </div>
                <div className="project-container">
                    <h1>Transfer Learning using GoogleNet for classification.</h1>
                    <a href="https://github.com/zubu007/Violence-Detection-using-GoogleNet"><FaGithub className='giticon'/></a>
                    <p>There are numerous pretrained model which were trained on the imageNet dataset for image classification. Using those models
                        by tranfer learning approach can have great results on other problems. This is what I did to tackle my same problem for violence
                        detection. The input is frames from violence videos and output is the classification of violence or nonviolence.
                    </p>
                    <ul>
                        <li>Used GoogleNet/InceptionV3</li>
                        <li>Removed the last dense layer and added 1 neuron for binary classification</li>
                        <li>Achieved an accuracy of 99.7% on the validation set</li>
                    </ul>
                </div>
                <div className="project-container">
                    <h1>Cats and Dogs classification</h1>
                    <a href="https://github.com/zubu007/Cats-and-Dogs"><FaGithub className='giticon'/></a>
                    <p>Used the famous Cats and dogs dataset to train a CNN model to classifcation dogs from cats.</p>
                    <ul>
                        <li>Cats and Dogs Dataset</li>
                        <li>CNN Architecture</li>
                        <li>Achieved 98% accuracy in classification</li>
                    </ul>
                </div>
                <div className="project-container">
                    <h1>Python Frame Extraction Script</h1>
                    <a href="https://github.com/zubu007/Cats-and-Dogs"><FaGithub className='giticon'/></a>
                    <p>The script is used to extract framesfrom videos. Which can be used as adataset for machine learning models.</p>
                    <ul>
                        <li>OpenCV</li>
                        <li>Frame by frame extractions</li>
                    </ul>
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Projects
