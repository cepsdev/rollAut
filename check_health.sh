#!/bin/bash
ps -eal | grep ceps && ps -eal | grep stacc && netstat -np | grep 3333
