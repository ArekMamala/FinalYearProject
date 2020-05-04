# This is used to make a nerual network
import keras as kr
# This is used to plot data
import numpy as np
import matplotlib.pyplot as plt
# This is used to upzip the files
# Adapted from: https://docs.python.org/3/library/gzip.html
import gzip

# NEED TO MAKE DATABASE FOR THIS TO WORK

# Importing files from the MNIST website
# The data from these files will be used to make the nerual network
with gzip.open('data/type.gz', 'rb') as f:
    train_type = f.read()

with gzip.open('data/postion.gz', 'rb') as f:
    train_pos = f.read()

# Loading in the files
(train_img, train_lbl), (test_img, test_lbl) = kr.datasets.mnist.load_data()

train_lbl = kr.utils.np_utils.to_categorical(train_lbl, 10)





